import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnexionAdminRoutingModule } from './connexion-admin-routing.module';
import { ConnexionAdminComponent } from './connexion-admin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ConnexionAdminComponent
  ],
  imports: [
    CommonModule,
    ConnexionAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ConnexionAdminModule { }
