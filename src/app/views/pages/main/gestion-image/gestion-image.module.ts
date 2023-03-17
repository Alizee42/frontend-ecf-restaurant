import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionImageRoutingModule } from './gestion-image-routing.module';
import { GestionImageComponent } from './gestion-image.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    GestionImageComponent
  ],
  imports: [
    CommonModule,
    GestionImageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GestionImageModule { }
