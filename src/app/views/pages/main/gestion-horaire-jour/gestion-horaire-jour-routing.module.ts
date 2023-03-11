import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GestionHoraireJourComponent} from "@views/pages/main/gestion-horaire-jour/gestion-horaire-jour.component";

const routes: Routes = [
  {
    path: '',
    component: GestionHoraireJourComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionHoraireJourRoutingModule { }
