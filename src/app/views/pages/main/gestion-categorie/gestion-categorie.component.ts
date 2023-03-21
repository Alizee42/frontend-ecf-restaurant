import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

// Ajouter Observable
import {Subject, takeUntil, Observable} from "rxjs";

import {FormBuilder, FormGroup} from '@angular/forms';

import { GestionCategorieService } from '@core/service/gestion-categorie.service';

@Component({
  selector: 'app-gestion-categorie',
  templateUrl: './gestion-categorie.component.html',
  styleUrls: ['./gestion-categorie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GestionCategorieComponent  implements OnInit {

  // Ajouter ici
  public categories$: Observable<any> = new Observable<any>();

  public categories = [];
  public category: any;
  

  formGestionCategorie!: FormGroup;
  private _destroy$ = new Subject<void>();


  constructor(private gestionCategorieService : GestionCategorieService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.categories$ = this.gestionCategorieService.getCategories();
    
    this.getCategories();

    this.initForm();
  }


  public initForm(): void {
      this.formGestionCategorie = this.formBuilder.group({
        nom: ['']
      })
  }

  public getCategories(): any {
    this.gestionCategorieService.getCategories()
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          console.log("Categories", data);
          this.categories = data
        })
  }

  public getOneCategorie(categorieId: number): any {
    this.gestionCategorieService.getOneCategorie(categorieId)
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          console.log("Details Category", data);
          this.category = data
        })
  }

  public deleteCategorie(categoryId: number): any {
    this.gestionCategorieService.deleteCategorie(categoryId)
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          console.log("Remove Category", data);
          this.category = data;
          window.location.reload();
          alert("Catégorie supprimée ");
        })
  }

  public createOrUpdateCategorie(id?: number): any {
      console.log("Create or Update Categorie", this.formGestionCategorie.value);
      const observable = id ? this.gestionCategorieService.updateCategorie(this.formGestionCategorie.value, id)
          : this.gestionCategorieService.createCategorie(this.formGestionCategorie.value);

      observable.pipe(takeUntil(this._destroy$))
          .subscribe(data => {
              console.log("Create or update Categorie", data);
              window.location.reload();
              alert("Catégorie ajoutée avec succès");
          })
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }



}
