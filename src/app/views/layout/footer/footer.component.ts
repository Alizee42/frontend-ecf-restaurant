import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Subject, takeUntil, Observable} from "rxjs";

import { GestionHoraireJourService } from '@core/service/gestion-horaire-jour.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  public horaires$: Observable<any> = new Observable<any>();
  public horaires = [];
  public horaire: any;
  private _destroy$ = new Subject<void>();

  constructor(private gestionHoraireJourService : GestionHoraireJourService) {
  }

  ngOnInit(): void {
    this.horaires$ = this.gestionHoraireJourService.getHoraires();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

}
