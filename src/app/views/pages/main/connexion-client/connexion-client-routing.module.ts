import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnexionClientComponent} from "@views/pages/main/connexion-client/connexion-client.component";

const routes: Routes = [
  {
    path: '',
    component: ConnexionClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnexionClientRoutingModule { }
