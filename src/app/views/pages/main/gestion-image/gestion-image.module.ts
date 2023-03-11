import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionImageRoutingModule } from './gestion-image-routing.module';
import { GestionImageComponent } from './gestion-image.component';


@NgModule({
  declarations: [
    GestionImageComponent
  ],
  imports: [
    CommonModule,
    GestionImageRoutingModule
  ]
})
export class GestionImageModule { }
