import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {FormBuilder, FormGroup} from '@angular/forms';

import { GestionCarteService } from '@core/service/gestion-carte.service';


@Component({
  selector: 'app-gestion-carte',
  templateUrl: './gestion-carte.component.html',
  styleUrls: ['./gestion-carte.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GestionCarteComponent implements OnInit {

  public cartes = [];
  public carte: any;
  formGestionCarte!: FormGroup;
  private _destroy$ = new Subject<void>();

  constructor(private gestionCarteService : GestionCarteService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getCartes();
    this.initForm();
  }

  public initForm(): void {
    this.formGestionCarte = this.formBuilder.group({
        titre: [''],
        description: [''],
        prix: [''],
        est_publie: ['']
    })
}

  public getCartes(): any {
    this.gestionCarteService.getCartes()
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          console.log("Cartes", data);
          this.cartes = data
        })
  }
  public getOneCarte(carteId: number): any {
    this.gestionCarteService.getOneCarte(carteId)
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          console.log("Details Carte", data);
          this.carte = data
        })
  }

  public deleteCategory(carteId: number): any {
    this.gestionCarteService.deleteCarte(carteId)
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          console.log("Remove Carte", data);
          this.carte = data
        })
  }

  public createOrUpdateCarte(id?: number): any {
      console.log("Create Carte", this.formGestionCarte.value);
      const observable = id ? this.gestionCarteService.updateCarte(this.formGestionCarte.value, id)
          : this.gestionCarteService.createCarte(this.formGestionCarte.value);

      observable.pipe(takeUntil(this._destroy$))
          .subscribe(data => {
              console.log("Create Carte", data);
              window.location.reload();
          })
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  } 
}
