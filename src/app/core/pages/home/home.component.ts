import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';
import { Image } from '../../models/Image';
import { LoaderService } from '../../services/loader';
import { GalleryService } from '../../services/gallery';
import { SnackBarService } from '../../services/snackbar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  galleryImage: Image[] = [];

  loaded = false;

  destroy$ = new Subject<void>();

  constructor(
    private loader: LoaderService,
    private galleryService: GalleryService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.getGalleryImage();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getGalleryImage(): void {
    const errorMsg = 'Ops... Erro ao carregar imagens.';
    const successMsg = 'Imagens carregadas com sucesso!';

    this.loader.show('Carregando imagens...');

    this.galleryService
      .getImages()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (images) => {
          this.galleryImage = images;
          this.snackBarService.showSnackBarSuccess(successMsg);
        },
        error: () => this.snackBarService.showSnackBarError(errorMsg),
      })
      .add(() => {
        this.loader.hide();
        this.loaded = true;
      });
  }
}
