import { animate, style, transition, trigger } from '@angular/animations';

/**
 * Aplica animação para fechar a imagem que está sendo exibida
 */
export const opacityImg = trigger('opacityImg', [
  transition(':leave', [
    style({ opacity: 1 }),
    animate('50ms', style({ opacity: 0.8 })),
  ]),
]);
