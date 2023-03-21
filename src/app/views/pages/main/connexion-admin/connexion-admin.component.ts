import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ConnexionAdminService } from '@core/service/connexion-admin.service';
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-connexion-admin',
  templateUrl: './connexion-admin.component.html',
  styleUrls: ['./connexion-admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConnexionAdminComponent implements OnInit {

  public category: any;

  formConnexionAdmin!: FormGroup;
  private _destroy$ = new Subject<void>();

  constructor(private connexionAdminService : ConnexionAdminService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
      this.formConnexionAdmin = this.formBuilder.group({
       
        email: [''],
        password: ['']
      })
  }

  public connexion(): any {
    console.log("Login ", this.formConnexionAdmin.value);
    const observable = this.connexionAdminService.login(this.formConnexionAdmin.value);

    observable.pipe(takeUntil(this._destroy$))
        .subscribe(data => {
            console.log("Login ", data);
            window.location.reload();
            alert("Connexion effectuée avec succès");
        })
}

ngOnDestroy() {
  this._destroy$.next();
  this._destroy$.complete();
}

}
