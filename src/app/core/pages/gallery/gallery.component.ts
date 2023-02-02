import { AnimationEvent } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { opacityImg } from '../../animations/close-opacity-img';
import { scaleImg } from '../../animations/open-close-scale-img';
import { Image } from '../../models/Image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [scaleImg, opacityImg],
})
export class GalleryComponent {
  /**
   * Galeria de imagens,
   * valor recebido do componente pai
   */
  @Input() galleryImage: Image[] = [];

  /**
   * Define se contador das imagem deve ser exibido,
   * valor recebido do componente pai
   */
  @Input() showCounter = false;

  /**
   * Define se a página está carregando,
   * valor receido do componente pai
   */
  @Input() loading!: boolean;

  /**
   * Define se uma imagem específica deve ser exibida
   */
  previewImage = false;

  /**
   * Representa a imagem atual
   */
  currentPreviewImage!: Image;

  /**
   * Representa o índice da imagem atual
   */
  currentIndex = 0;

  /**
   * Retorna o comprimento do array galleryImage dinamicamente
   */
  get galleryImageLength(): number {
    return this.galleryImage.length;
  }

  /**
   * Seta variáveis ao selecionar uma imagem específica
   *
   * @param index índice da imagem selecionada
   */
  onPreviewImage(index: number): void {
    this.previewImage = true;
    this.currentIndex = index;
    this.currentPreviewImage = this.galleryImage[index];
  }

  /**
   * Seta a variável de visualização de imagem,
   * caso a propriedade do evento seja void
   *
   * @param event Evento do tipo AnimationEvent
   */
  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.previewImage = false;
    }
  }

  /**
   * Seta a variável para false e esconde a visualização da imagem
   */
  onClosePreview() {
    this.previewImage = false;
  }

  /**
   * Incrementa 1 no índice da imagem e verifica se índice existe no array,
   * caso não exista, seta o index como zero para voltar ao início do array
   * caso exista seta a variável que representa a próxima imagem a ser exibida
   */
  onNextImage(): void {
    this.currentIndex++;

    if (this.currentIndex > this.galleryImage.length - 1) {
      this.currentIndex = 0;
    }

    this.currentPreviewImage = this.galleryImage[this.currentIndex];
  }

  /**
   * Decrementa 1 no índice da imagem e verifica se índice existe no array,
   * caso não exista, seta o index como zero para voltar ao início do array
   * caso exista seta a variável que representa a próxima imagem a ser exibida
   */
  onPreviousImage(): void {
    this.currentIndex--;

    if (this.currentIndex < 0) {
      this.currentIndex = this.galleryImage.length - 1;
    }

    this.currentPreviewImage = this.galleryImage[this.currentIndex];
  }
}
