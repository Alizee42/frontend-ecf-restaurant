import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GestionMenuComponent} from "@views/pages/main/gestion-menu/gestion-menu.component";

const routes: Routes = [
  {
    path: '',
    component: GestionMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionMenuRoutingModule { }
