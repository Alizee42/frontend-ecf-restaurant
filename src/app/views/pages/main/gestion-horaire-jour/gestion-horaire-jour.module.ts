import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionHoraireJourRoutingModule } from './gestion-horaire-jour-routing.module';
import { GestionHoraireJourComponent } from './gestion-horaire-jour.component';


@NgModule({
  declarations: [
    GestionHoraireJourComponent
  ],
  imports: [
    CommonModule,
    GestionHoraireJourRoutingModule
  ]
})
export class GestionHoraireJourModule { }
