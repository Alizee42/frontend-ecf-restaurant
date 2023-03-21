import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ConnexionAdminService } from '@core/service/connexion-admin.service';
import {Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router"

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

  constructor(private router: Router, private connexionAdminService : ConnexionAdminService, private formBuilder: FormBuilder) {
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

    let status: any;

    observable.pipe(takeUntil(this._destroy$))
        .subscribe(data => {
            status = data.status;
            if (status == "Compte administrateur trouvé") {
              alert("Connexion effectuée avec succès");
              this.router.navigate(['/admin'])
            } else if(status == "Compte client trouvé") {
              alert("Connexion effectuée avec succès");
              this.router.navigate(['/reservation'])
            } else {
              alert("Connexion effectuée avec succès");
              this.router.navigate(['/'])
            }

        }, error => {
          alert("Email ou mot de passe incorrect");
        })
}

ngOnDestroy() {
  this._destroy$.next();
  this._destroy$.complete();
}

}
