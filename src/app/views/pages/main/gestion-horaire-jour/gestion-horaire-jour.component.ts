import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {FormBuilder, FormGroup} from '@angular/forms';


import { GestionHoraireJourService } from '@core/service/gestion-horaire-jour.service';

@Component({
  selector: 'app-gestion-horaire-jour',
  templateUrl: './gestion-horaire-jour.component.html',
  styleUrls: ['./gestion-horaire-jour.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GestionHoraireJourComponent implements OnInit {

  public horaireJour = [];
  public horaire: any;
  formGestionHoraireJour!: FormGroup;
  private _destroy$ = new Subject<void>();


  constructor(private gestionHoraireJourService : GestionHoraireJourService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getHoraireJours();
    this.initForm();
  }

  public initForm(): void {
    this.formGestionHoraireJour = this.formBuilder.group({
        jour: [''],
        moment: [''],
        ouverture: [''],
        fermeture: ['']
    })
}

  public getHoraireJours(): any {
    this.gestionHoraireJourService.getHoraires()
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          console.log("Horaires", data);
          this.horaireJour = data
        })
  }

  public getOneHoraire(horaireId: number): any {
    this.gestionHoraireJourService.getOneHoraire(horaireId)
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          console.log("Details Horaire", data);
          this.horaire = data
        })
  }

  public deleteHoraire(horaireId: number): any {
    this.gestionHoraireJourService.deleteHoraire(horaireId)
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          console.log("Remove Horaire", data);
          this.horaire = data
        })
      }

        public createOrUpdateHoraire(id?: number): any {
          console.log("Create Horaire", this.formGestionHoraireJour.value);
          const observable = id ? this.gestionHoraireJourService.updateHoraire(this.formGestionHoraireJour.value, id)
              : this.gestionHoraireJourService.createHoraire(this.formGestionHoraireJour.value);
    
          observable.pipe(takeUntil(this._destroy$))
              .subscribe(data => {
                  console.log("Create Horaire", data);
                  window.location.reload();
              })
      }
    
      ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
      }
    }




