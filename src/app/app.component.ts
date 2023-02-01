import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Image } from './core/models/Image';
import { GalleryService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  images: Image[] = [];

  destroy$ = new Subject<void>();

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.getAllImages();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getAllImages(): void {
    this.galleryService
      .getImages()
      .pipe(takeUntil(this.destroy$))
      .subscribe((images) => {
        this.images = images;
      });
  }
}
