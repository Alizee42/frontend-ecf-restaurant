import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GestionCarteService {

  
  private baseUrl = 'https://backend-restaurant-ecf.herokuapp.com/api/rest/v1';

  constructor(private httpClient: HttpClient) { }

  public getCartes(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/cartes`);
  }

  public getOneCarte(carteId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/cartes/${carteId}`);
  }

  public createCarte(data: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/cartes`, data);
  }

  public updateCarte(data: any, carteId: number): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/cartes/${carteId}`, data);
  }

  public deleteCarte(carteId: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/cartes/${carteId}`);
  }

  public publishCarte(carteId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/cartes/${carteId}/publier`);
  }

  public desactivateCarte(carteId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/cartes/${carteId}/desactiver`);
  }

  
}
