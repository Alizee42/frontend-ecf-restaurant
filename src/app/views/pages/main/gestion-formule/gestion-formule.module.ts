import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionFormuleRoutingModule } from './gestion-formule-routing.module';
import { GestionFormuleComponent } from './gestion-formule.component';


@NgModule({
  declarations: [
    GestionFormuleComponent
  ],
  imports: [
    CommonModule,
    GestionFormuleRoutingModule
  ]
})
export class GestionFormuleModule { }
