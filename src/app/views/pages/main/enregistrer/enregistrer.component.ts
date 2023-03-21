import { EnregistrerService } from './../../../../core/service/enregistrer.service';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Subject, takeUntil, Observable} from "rxjs";
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-enregistrer',
  templateUrl: './enregistrer.component.html',
  styleUrls: ['./enregistrer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnregistrerComponent implements OnInit {
  formEnregistrer!: FormGroup;
  private _destroy$ = new Subject<void>();

  constructor(private enregistrerService : EnregistrerService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.formEnregistrer = this.formBuilder.group({
      nom: [''],
      prenoms: [''],
      telephone: [''],
      nombreDeConvive: [''],
      allergies: [''],
      email: [''],
      password: [''],
        
    })
  }

  public enregistrer(): any {
    const observable = this.enregistrerService.createClient(this.formEnregistrer.value);
      observable.pipe(takeUntil(this._destroy$))
          .subscribe(data => {
              window.location.reload();
              alert("Compte client enregistré avec succès");
          })
  }
  
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
