import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page.component';

const routes: Routes = [
  { 
    path: '',
    component: ErrorPageComponent,
    data: {
      'type': 404,
      'title': 'Page Introuvable',
      'desc': 'Oopps!! La page que vous recherchez n\'existe pas.'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorPageRoutingModule { }
