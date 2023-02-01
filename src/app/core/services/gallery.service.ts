import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/Image';
import endpoints from '../../../environments/endpoints';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private http: HttpClient) {}

  getImages(): Observable<Image[]> {
    const url = endpoints.images;

    return this.http.get<Image[]>(url);
  }
}
