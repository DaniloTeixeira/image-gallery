import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Image } from '../../models/Image';
import { GalleryService } from '../../services/gallery';
import { LoaderService } from '../../services/loader';
import { SnackBarService } from '../../services/snackbar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  /**
   * Representa o array de fotos
   */
  galleryImage: Image[] = [];

  /**
   * Representa se a página está em carregamento
   */
  loading = true;

  /**
   * Subject que é emitido quando componente é destruído
   */
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

  /**
   * Busca a galeria de imagens e seta o valor na variável
   */
  private getGalleryImage(): void {
    this.loader.show('Carregando imagens...');

    this.galleryService
      .getImages()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (images) => {
          this.loading = false;
          this.galleryImage = images;
          this.snackBarService.showSnackBarSuccess(
            'Imagens carregadas com sucesso!'
          );
        },
        error: () =>
          this.snackBarService.showSnackBarError(
            'Ops... Erro ao carregar imagens.'
          ),
      })
      .add(() => this.loader.hide());
  }
}
