import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GestionCategorieComponent} from "@views/pages/main/gestion-categorie/gestion-categorie.component";

const routes: Routes = [
  {
    path: '',
    component: GestionCategorieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionCategorieRoutingModule { }
