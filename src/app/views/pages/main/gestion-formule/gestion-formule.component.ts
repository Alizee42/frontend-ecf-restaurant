import { GestionFormuleService } from './../../../../core/service/gestion-formule.service';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-gestion-formule',
  templateUrl: './gestion-formule.component.html',
  styleUrls: ['./gestion-formule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GestionFormuleComponent  implements OnInit {

  public formules = [];
  public formule: any;
  formGestionFormule!: FormGroup;
  private _destroy$ = new Subject<void>();


  constructor(private gestionFormuleService : GestionFormuleService,  private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getFormules();
    this.initForm();
  }

  public initForm(): void {
    this.formGestionFormule = this.formBuilder.group({
        
      prix: [''],
      description: [''],
              
    })
  }

  public getFormules(): any {
    this.gestionFormuleService.getFormules()
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          console.log("Formules", data);
          this.formules = data
        })
  }

  public getOneFormule(formuleId: number): any {
    this.gestionFormuleService.getOneFormule(formuleId)
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          console.log("Details Formule", data);
          this.formule = data
        })
  }

  public deleteFormule(formuleId: number): any {
    this.gestionFormuleService.deleteFormule(formuleId)
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          console.log("Remove Formule", data);
          this.formule = data;
          window.location.reload();
        })
  }

  public createOrUpdateFormule(id?: number): any {
    console.log("Create Formule", this.formGestionFormule.value);
    const observable = id ? this.gestionFormuleService.updateFormule(this.formGestionFormule.value, id)
        : this.gestionFormuleService.createFormule(this.formGestionFormule.value);

    observable.pipe(takeUntil(this._destroy$))
        .subscribe(data => {
            console.log("Create Formule", data);
            window.location.reload();
        })
}

ngOnDestroy() {
  this._destroy$.next();
  this._destroy$.complete();
} 

}
