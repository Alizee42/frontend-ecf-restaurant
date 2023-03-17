import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionMenuRoutingModule } from './gestion-menu-routing.module';
import { GestionMenuComponent } from './gestion-menu.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    GestionMenuComponent
  ],
  imports: [
    CommonModule,
    GestionMenuRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GestionMenuModule { }
