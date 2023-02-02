import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay, Subject, takeUntil } from 'rxjs';
import { Image } from './core/models/Image';
import { GalleryService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
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

  constructor(private galleryService: GalleryService) {}

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
    this.galleryService
      .getImages()
      .pipe(takeUntil(this.destroy$), delay(500))
      .subscribe((images) => {
        this.galleryImage = images;
        this.loading = false;
      });
  }
}
