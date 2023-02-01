import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';

import { LoaderComponent } from './components/loader';
import { FooterComponent } from './components/footer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';

const components = [LoaderComponent, HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MaterialModule, FontAwesomeModule],
  exports: [...components],
})
export class SharedModule {}
