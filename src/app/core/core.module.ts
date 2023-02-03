import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SharedModule } from '../shared/shared.module';
import { GalleryComponent } from './pages/gallery';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [GalleryComponent, HomeComponent],
  imports: [CommonModule, SharedModule, MatSnackBarModule],
  exports: [GalleryComponent],
})
export class CoreModule {}
