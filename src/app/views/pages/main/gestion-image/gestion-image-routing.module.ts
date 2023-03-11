import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GestionImageComponent} from "@views/pages/main/gestion-image/gestion-image.component";

const routes: Routes = [
  {
    path: '',
    component: GestionImageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionImageRoutingModule { }
