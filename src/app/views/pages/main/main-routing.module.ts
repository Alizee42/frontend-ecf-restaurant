import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from '../../layout/base/base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'accueil',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'cartes-et-menus',
        loadChildren: () => import('./card-and-menu/card-and-menu.module').then(m => m.CardAndMenuModule)
      },
      {
        path: 'reservation',
        loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'connexion-admin',
        loadChildren: () => import('./connexion-admin/connexion-admin.module').then(m => m.ConnexionAdminModule)
      },
      {
        path: 'connexion-client',
        loadChildren: () => import('./connexion-client/connexion-client.module').then(m => m.ConnexionClientModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'gestion-categorie',
        loadChildren: () => import('./gestion-categorie/gestion-categorie.module').then(m => m.GestionCategorieModule)
      },
      {
        path: 'gestion-horaire-jour',
        loadChildren: () => import('./gestion-horaire-jour/gestion-horaire-jour.module').then(m => m.GestionHoraireJourModule)
      },
      {
        path: 'gestion-menu',
        loadChildren: () => import('./gestion-menu/gestion-menu.module').then(m => m.GestionMenuModule)
      },
      {
        path: 'gestion-carte',
        loadChildren: () => import('./gestion-carte/gestion-carte.module').then(m => m.GestionCarteModule)
      },
      {
        path: 'gestion-image',
        loadChildren: () => import('./gestion-image/gestion-image.module').then(m => m.GestionImageModule)
      },
      {
        path: 'gestion-compte-utilisateur',
        loadChildren: () => import('./gestion-compte-utilisateur/gestion-compte-utilisateur.module').then(m => m.GestionCompteUtilisateurModule)
      },
      {
        path: 'gestion-formule',
        loadChildren: () => import('./gestion-formule/gestion-formule.module').then(m => m.GestionFormuleModule)
      },
      {
        path: 'enregistrer',
        loadChildren: () => import('./enregistrer/enregistrer.module').then(m => m.EnregistrerModule)
      },
      { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
