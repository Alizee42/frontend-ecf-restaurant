import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionCarteRoutingModule } from './gestion-carte-routing.module';
import { GestionCarteComponent } from './gestion-carte.component';


@NgModule({
  declarations: [
    GestionCarteComponent
  ],
  imports: [
    CommonModule,
    GestionCarteRoutingModule
  ]
})
export class GestionCarteModule { }
