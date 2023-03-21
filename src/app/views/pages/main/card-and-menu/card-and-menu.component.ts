import { GestionCarteService } from './../../../../core/service/gestion-carte.service';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Subject, Observable} from "rxjs";

import { GestionMenuService } from '@core/service/gestion-menu.service';

@Component({
  selector: 'app-card-and-menu',
  templateUrl: './card-and-menu.component.html',
  styleUrls: ['./card-and-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardAndMenuComponent implements OnInit {

  public menus$: Observable<any> = new Observable<any>();
  public cartes$: Observable<any> = new Observable<any>();
  private _destroy$ = new Subject<void>();

  constructor(private gestionMenuService : GestionMenuService, private gestionCarte: GestionCarteService) {
  }

  ngOnInit(): void {
    this.menus$ = this.gestionMenuService.getMenus();
    this.cartes$ = this.gestionCarte.getCartes();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  } 

}
