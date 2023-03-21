import { GestionImageService } from './../../../../core/service/gestion-image.service';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Subject, Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  public images$: Observable<any> = new Observable<any>();
  private _destroy$ = new Subject<void>();

  constructor(private gestionImageService : GestionImageService) {
  }

  ngOnInit(): void {
    this.images$ = this.gestionImageService.getImages();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  } 

}
