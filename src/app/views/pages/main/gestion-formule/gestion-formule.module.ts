import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionFormuleRoutingModule } from './gestion-formule-routing.module';
import { GestionFormuleComponent } from './gestion-formule.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    GestionFormuleComponent
  ],
  imports: [
    CommonModule,
    GestionFormuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GestionFormuleModule { }
