import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SharedModule } from '../shared/shared.module';
import { GalleryComponent } from './pages/gallery';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [GalleryComponent, HomeComponent],
  imports: [CommonModule, ComponentsModule, SharedModule, MatSnackBarModule],
  exports: [GalleryComponent],
})
export class CoreModule {}
