import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionMenuRoutingModule } from './gestion-menu-routing.module';
import { GestionMenuComponent } from './gestion-menu.component';


@NgModule({
  declarations: [
    GestionMenuComponent
  ],
  imports: [
    CommonModule,
    GestionMenuRoutingModule
  ]
})
export class GestionMenuModule { }
