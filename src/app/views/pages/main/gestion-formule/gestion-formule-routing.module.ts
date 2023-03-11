import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GestionFormuleComponent} from "@views/pages/main/gestion-formule/gestion-formule.component";

const routes: Routes = [
  {
    path: '',
    component: GestionFormuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionFormuleRoutingModule { }
