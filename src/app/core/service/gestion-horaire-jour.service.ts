import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GestionHoraireJourService {

  private baseUrl = 'https://backend-restaurant-ecf.herokuapp.com/api/rest/v1';

  constructor(private httpClient: HttpClient) { }

  public getHoraires(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/horaires`);
  }

  public getOneHoraire(horaireId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/horaires/${horaireId}`);
  }

  public createHoraire(data: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/horaires`, data);
  }

  public updateHoraire(data: any, horaireId: number): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/horaires/${horaireId}`, data);
  }

  public deleteHoraire(horaireId: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/horaires/${horaireId}`);
  }
}
