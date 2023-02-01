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
  @Input() galleryImage: Image[] = [];
  @Input() showCount = false;
  @Input() loading!: boolean;

  previewImage = false;
  showMask = false;
  currentLightboxImage: Image = this.galleryImage[0];
  currentIndex = 0;
  controls = true;

  constructor() {}

  get galleryImageLength(): number {
    return this.galleryImage.length;
  }

  ngOnInit(): void {}

  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.galleryImage[index];
  }

  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }

  onClosePreview() {
    this.previewImage = false;
  }

  next(): void {
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex > this.galleryImage.length - 1) {
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.galleryImage[this.currentIndex];
  }

  prev(): void {
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.galleryImage.length - 1;
    }
    this.currentLightboxImage = this.galleryImage[this.currentIndex];
  }
}
