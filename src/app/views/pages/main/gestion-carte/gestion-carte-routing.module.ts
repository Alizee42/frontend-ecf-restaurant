import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GestionCarteComponent} from "@views/pages/main/gestion-carte/gestion-carte.component";

const routes: Routes = [
  {
    path: '',
    component: GestionCarteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionCarteRoutingModule { }
