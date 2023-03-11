import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardAndMenuRoutingModule } from './card-and-menu-routing.module';
import { CardAndMenuComponent } from './card-and-menu.component';


@NgModule({
  declarations: [
    CardAndMenuComponent
  ],
  imports: [
    CommonModule,
    CardAndMenuRoutingModule
  ]
})
export class CardAndMenuModule { }
