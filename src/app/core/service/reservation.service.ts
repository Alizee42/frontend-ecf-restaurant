import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl = 'https://backend-restaurant-ecf.herokuapp.com/api/rest/v1';

  constructor(private httpClient: HttpClient) { }

  public getReservations(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/reservations`);
  }

  public getOneReservation(reservationId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/reservations/${reservationId}`);
  }

  public createReservation(data: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/reservations`, data);
  }

  public updateReservation(data: any, reservationId: number): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/reservations/${reservationId}`, data);
  }

  public deleteReservation(reservationId: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/reservations/${reservationId}`);
  }

  public getPlaceDisponible(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/places/disponible`);
  }

  public validerReservation(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/places/valider`);
  }

  public refuserReservation(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/places/refuser`);
  }

 }
