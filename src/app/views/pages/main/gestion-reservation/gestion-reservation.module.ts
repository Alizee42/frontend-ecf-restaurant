import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionReservationRoutingModule } from './gestion-reservation-routing.module';
import { GestionReservationComponent } from './gestion-reservation.component';


@NgModule({
  declarations: [
    GestionReservationComponent
  ],
  imports: [
    CommonModule,
    GestionReservationRoutingModule
  ]
})
export class GestionReservationModule { }
