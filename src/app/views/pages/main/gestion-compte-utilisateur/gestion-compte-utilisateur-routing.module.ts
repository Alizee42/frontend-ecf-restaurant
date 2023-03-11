import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  GestionCompteUtilisateurComponent
} from "@views/pages/main/gestion-compte-utilisateur/gestion-compte-utilisateur.component";

const routes: Routes = [
  {
    path: '',
    component: GestionCompteUtilisateurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionCompteUtilisateurRoutingModule { }
