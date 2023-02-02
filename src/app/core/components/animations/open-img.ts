import { animate, style, transition, trigger } from '@angular/animations';

export const openImg = trigger('openImg', [
  transition('void => visible', [
    style({ transform: 'scale(0.5)' }),
    animate('150ms', style({ transform: 'scale(1)' })),
  ]),
  transition('visible => void', [
    style({ transform: 'scale(1)' }),
    animate('150ms', style({ transform: 'scale(0.5)' })),
  ]),
]);
