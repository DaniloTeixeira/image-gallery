import { animate, style, transition, trigger } from '@angular/animations';

export const opacityImg = trigger('opacityImg', [
  transition(':leave', [
    style({ opacity: 1 }),
    animate('50ms', style({ opacity: 0.8 })),
  ]),
]);
