import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionCompteUtilisateurRoutingModule } from './gestion-compte-utilisateur-routing.module';
import { GestionCompteUtilisateurComponent } from './gestion-compte-utilisateur.component';


@NgModule({
  declarations: [
    GestionCompteUtilisateurComponent
  ],
  imports: [
    CommonModule,
    GestionCompteUtilisateurRoutingModule
  ]
})
export class GestionCompteUtilisateurModule { }
