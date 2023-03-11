import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnexionAdminRoutingModule } from './connexion-admin-routing.module';
import { ConnexionAdminComponent } from './connexion-admin.component';


@NgModule({
  declarations: [
    ConnexionAdminComponent
  ],
  imports: [
    CommonModule,
    ConnexionAdminRoutingModule
  ]
})
export class ConnexionAdminModule { }
