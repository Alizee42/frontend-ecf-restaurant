import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionCategorieRoutingModule } from './gestion-categorie-routing.module';
import { GestionCategorieComponent } from './gestion-categorie.component';


@NgModule({
  declarations: [
    GestionCategorieComponent
  ],
  imports: [
    CommonModule,
    GestionCategorieRoutingModule
  ]
})
export class GestionCategorieModule { }
