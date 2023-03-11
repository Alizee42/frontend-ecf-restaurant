import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path: 'error',
    loadChildren: () => import('./views/pages/error-page/error-page.module').then(m => m.ErrorPageModule)
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
