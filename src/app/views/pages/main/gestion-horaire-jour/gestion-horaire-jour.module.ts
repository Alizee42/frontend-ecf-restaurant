import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionHoraireJourRoutingModule } from './gestion-horaire-jour-routing.module';
import { GestionHoraireJourComponent } from './gestion-horaire-jour.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    GestionHoraireJourComponent
  ],
  imports: [
    CommonModule,
    GestionHoraireJourRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GestionHoraireJourModule { }
