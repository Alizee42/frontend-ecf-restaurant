import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnregistrerRoutingModule } from './enregistrer-routing.module';
import { EnregistrerComponent } from './enregistrer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EnregistrerComponent
  ],
  imports: [
    CommonModule,
    EnregistrerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EnregistrerModule { }
