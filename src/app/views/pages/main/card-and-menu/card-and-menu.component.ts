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
  private _destroy$ = new Subject<void>();

  constructor(private gestionMenuService : GestionMenuService) {
  }

  ngOnInit(): void {
    this.menus$ = this.gestionMenuService.getMenus();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  } 

}
