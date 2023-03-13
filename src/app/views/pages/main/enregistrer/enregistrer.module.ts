import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnregistrerRoutingModule } from './enregistrer-routing.module';
import { EnregistrerComponent } from './enregistrer.component';


@NgModule({
  declarations: [
    EnregistrerComponent
  ],
  imports: [
    CommonModule,
    EnregistrerRoutingModule
  ]
})
export class EnregistrerModule { }
