import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardAndMenuComponent } from './card-and-menu.component';

const routes: Routes = [
  {
    path: '',
    component: CardAndMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardAndMenuRoutingModule { }
