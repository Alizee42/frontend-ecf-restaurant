import { ReservationService } from './../../../../core/service/reservation.service';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Subject, takeUntil, Observable} from "rxjs";
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservationComponent implements OnInit {

  public reservations$: Observable<any> = new Observable<any>();

  formReservation!: FormGroup;
  private _destroy$ = new Subject<void>();

  constructor(private reservationService : ReservationService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.reservations$ = this.reservationService.getReservations();

    this.initForm();
  }

  public initForm(): void {
    this.formReservation = this.formBuilder.group({
      nom: [''],
      numero: [''],
      date: [''],
      heurePrevu: [''],
      nombreConvive: [''],
      allergie: ['']
    })
}

public createReservation(): any {
  console.log("Create reservation", this.formReservation.value);
  const observable =  this.reservationService.createReservation(this.formReservation.value);

  observable.pipe(takeUntil(this._destroy$))
      .subscribe(data => {
          console.log("Create reservation", data);
          window.location.reload();
      })
}

ngOnDestroy() {
this._destroy$.next();
this._destroy$.complete();
}


}
