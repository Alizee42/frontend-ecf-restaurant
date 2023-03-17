import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GestionFormuleService {

  private baseUrl = 'https://backend-restaurant-ecf.herokuapp.com/api/rest/v1';

  constructor(private httpClient: HttpClient) { }

  public getFormules(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/formules`);
  }

  public getOneFormule(formuleId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/formules/${formuleId}`);
  }

  public createFormule(data: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/formules`, data);
  }

  public updateFormule(data: any, formuleId: number): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/formules/${formuleId}`, data);
  }

  public deleteFormule(formuleId: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/formules/${formuleId}`);
  }
}
