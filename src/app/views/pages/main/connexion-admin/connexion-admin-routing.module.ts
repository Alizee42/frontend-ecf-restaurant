import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnexionAdminComponent} from "@views/pages/main/connexion-admin/connexion-admin.component";

const routes: Routes = [
  {
    path: '',
    component: ConnexionAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnexionAdminRoutingModule { }
