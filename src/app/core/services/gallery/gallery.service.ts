import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Image } from '../../models/Image';
import { images } from '../../data/images';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  getImages(): Observable<Image[]> {
    return of(images).pipe(delay(500));
  }
}
