import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionCategorieRoutingModule } from './gestion-categorie-routing.module';
import { GestionCategorieComponent } from './gestion-categorie.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    GestionCategorieComponent
  ],
  imports: [
    CommonModule,
    GestionCategorieRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GestionCategorieModule { }
