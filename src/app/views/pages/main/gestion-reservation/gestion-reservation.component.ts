import { ReservationService } from './../../../../core/service/reservation.service';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Subject, takeUntil, Observable} from "rxjs";

@Component({
  selector: 'app-gestion-reservation',
  templateUrl: './gestion-reservation.component.html',
  styleUrls: ['./gestion-reservation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GestionReservationComponent implements OnInit {

  public reservations$: Observable<any> = new Observable<any>();
  private _destroy$ = new Subject<void>();

  constructor(private reservationService : ReservationService) {
  }

  ngOnInit(): void {
    this.reservations$ = this.reservationService.getReservations();
  }

  public deleteReservation(reservationId: number): any {
    this.reservationService.deleteReservation(reservationId)
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          window.location.reload();
          alert("Réservation supprimée");
        });
    this.refuserReservation();
  }

  public validerReservation(): any {
    this.reservationService.validerReservation()
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          window.location.reload();
          alert("Réservation acceptée");
        })
  }

  public refuserReservation(): any {
    this.reservationService.refuserReservation()
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          window.location.reload();
          alert("Réservation refusée");
        })
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  } 


}
