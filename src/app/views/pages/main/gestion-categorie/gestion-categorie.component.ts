import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";

import {FormBuilder, FormGroup} from '@angular/forms';

import { GestionCategorieService } from '@core/service/gestion-categorie.service';

@Component({
  selector: 'app-gestion-categorie',
  templateUrl: './gestion-categorie.component.html',
  styleUrls: ['./gestion-categorie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GestionCategorieComponent  implements OnInit {

  public categories = [];
  public category: any;
  

  formGestionCategorie!: FormGroup;
  private _destroy$ = new Subject<void>();


  constructor(private gestionCategorieService : GestionCategorieService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
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
          this.category = data
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
          })
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }



}
