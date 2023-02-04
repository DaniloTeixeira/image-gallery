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
  @Input() galleryImage: Image[] = [];
  @Input() showCounter = false;
  @Input() loading!: boolean;

  currentIndex = 0;
  previewImage = false;
  currentPreviewImage!: Image;

  get galleryImageLength(): number {
    return this.galleryImage.length;
  }

  onPreviewImage(index: number): void {
    this.previewImage = true;
    this.currentIndex = index;
    this.currentPreviewImage = this.galleryImage[index];
  }

  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.previewImage = false;
    }
  }

  onClosePreview() {
    this.previewImage = false;
  }

  onNextImage(): void {
    this.currentIndex++;

    if (this.currentIndex > this.galleryImage.length - 1) {
      this.currentIndex = 0;
    }

    this.currentPreviewImage = this.galleryImage[this.currentIndex];
  }

  onPreviousImage(): void {
    this.currentIndex--;

    if (this.currentIndex < 0) {
      this.currentIndex = this.galleryImage.length - 1;
    }

    this.currentPreviewImage = this.galleryImage[this.currentIndex];
  }
}
