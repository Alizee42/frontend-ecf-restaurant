import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {FormBuilder, FormGroup} from '@angular/forms';

import { GestionMenuService } from '@core/service/gestion-menu.service';

@Component({
  selector: 'app-gestion-menu',
  templateUrl: './gestion-menu.component.html',
  styleUrls: ['./gestion-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GestionMenuComponent implements OnInit {

  public menus = [];
  public menu: any;
  formGestionMenu!: FormGroup;
  private _destroy$ = new Subject<void>();

  constructor(private gestionMenuService : GestionMenuService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getMenus();
    this.initForm();
  }

  public initForm(): void {
    this.formGestionMenu = this.formBuilder.group({
        titre: [''],
        
    })
}

  public getMenus(): any {
    this.gestionMenuService.getMenus()
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          console.log("Menus", data);
          this.menus = data
        })
  }

  public getOneMenu(menuId: number): any {
    this.gestionMenuService.getOneMenu(menuId)
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          console.log("Details Menu", data);
          this.menu = data
        })
  }

  public deleteMenu(menuId: number): any {
    this.gestionMenuService.deleteMenu(menuId)
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          console.log("Remove Menu", data);
          this.menu = data;
          window.location.reload();
        })
  }

  public createOrUpdateMenu(id?: number): any {
    console.log("Create Menu", this.formGestionMenu.value);
    const observable = id ? this.gestionMenuService.updateMenu(this.formGestionMenu.value, id)
        : this.gestionMenuService.createMenu(this.formGestionMenu.value);

    observable.pipe(takeUntil(this._destroy$))
        .subscribe(data => {
            console.log("Create Menu", data);
            window.location.reload();
        })
}

ngOnDestroy() {
  this._destroy$.next();
  this._destroy$.complete();
} 

}
