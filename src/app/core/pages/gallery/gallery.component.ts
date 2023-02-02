import {
  animate,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Image } from '../../models/Image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({ transform: 'scale(0.5)' }),
        animate('150ms', style({ transform: 'scale(1)' })),
      ]),
      transition('visible => void', [
        style({ transform: 'scale(1)' }),
        animate('150ms', style({ transform: 'scale(0.5)' })),
      ]),
    ]),
    trigger('animation2', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('50ms', style({ opacity: 0.8 })),
      ]),
    ]),
  ],
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

  constructor() {}

  /**
   * Retorna o comprimento do array galleryImage dinamicamente
   */
  get galleryImageLength(): number {
    return this.galleryImage.length;
  }

  ngOnInit(): void {}

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
