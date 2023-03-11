import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnexionClientRoutingModule } from './connexion-client-routing.module';
import { ConnexionClientComponent } from './connexion-client.component';


@NgModule({
  declarations: [
    ConnexionClientComponent
  ],
  imports: [
    CommonModule,
    ConnexionClientRoutingModule
  ]
})
export class ConnexionClientModule { }
