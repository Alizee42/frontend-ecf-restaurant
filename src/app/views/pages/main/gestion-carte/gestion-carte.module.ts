import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionCarteRoutingModule } from './gestion-carte-routing.module';
import { GestionCarteComponent } from './gestion-carte.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    GestionCarteComponent
  ],
  imports: [
    CommonModule,
    GestionCarteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GestionCarteModule { }
