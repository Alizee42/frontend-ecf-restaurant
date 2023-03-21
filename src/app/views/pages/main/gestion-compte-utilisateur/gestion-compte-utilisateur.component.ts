import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Subject, takeUntil, Observable} from "rxjs";
import {FormBuilder, FormGroup} from '@angular/forms';

import { GestionCompteUtilisateurService } from '@core/service/gestion-compte-utilisateur.service';

@Component({
  selector: 'app-gestion-compte-utilisateur',
  templateUrl: './gestion-compte-utilisateur.component.html',
  styleUrls: ['./gestion-compte-utilisateur.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GestionCompteUtilisateurComponent implements OnInit {

  public utilisateurs$: Observable<any> = new Observable<any>();
  public compteUlisateurs = [];
  public utilisateur: any;
  formGestionCompteUtilisateur!: FormGroup;
  private _destroy$ = new Subject<void>();


  constructor(private gestionCompteUtilisateurService : GestionCompteUtilisateurService, private formBuilder: FormBuilder)  {
  }

  ngOnInit(): void {
    this.utilisateurs$ = this.gestionCompteUtilisateurService.getUtilisateurs();
    this.getCompteUtilisateurs();
    this.initForm();
  }

  public initForm(): void {
    this.formGestionCompteUtilisateur = this.formBuilder.group({
        email: [''],
        password: [''],
        role: [''],
        estActif: ['']
    })
  }

  public getCompteUtilisateurs(): any {
    this.gestionCompteUtilisateurService.getUtilisateurs()
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          console.log("Compte utilisateurs", data);
          this.compteUlisateurs = data
        })
  }

  public  getOneUtilisateur(utilisateurId: number): any {
    this.gestionCompteUtilisateurService.getOneUtilisateur(utilisateurId)
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          console.log("Details  utilisateur", data);
          this.utilisateur = data
        })
  }

  public deleteUtilisateur(utilisateurId: number): any {
    this.gestionCompteUtilisateurService.deleteUtilisateur(utilisateurId)
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          console.log("Remove  utilisateur", data);
          this.utilisateur = data;
          window.location.reload();
          alert("Utilisateur supprimé");
        })
  }
  
  public createOrUpdateUtilisateur(id?: number): any {
    console.log("Create Utilisateur", this.formGestionCompteUtilisateur.value);
    const observable = id ? this.gestionCompteUtilisateurService.updateUtilisateur(this.formGestionCompteUtilisateur.value, id)
        : this.gestionCompteUtilisateurService.createUtilisateur(this.formGestionCompteUtilisateur.value);

    observable.pipe(takeUntil(this._destroy$))
        .subscribe(data => {
            console.log("Create Utilisateur", data);
            window.location.reload();
            alert("Utilisateur crée avec succès");
        })
}

    ngOnDestroy() {
      this._destroy$.next();
      this._destroy$.complete();
} 
   }