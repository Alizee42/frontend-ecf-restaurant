import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GestionCompteUtilisateurService {

  private baseUrl = 'https://backend-restaurant-ecf.herokuapp.com/api/rest/v1';

  constructor(private httpClient: HttpClient) { }

  public getUtilisateurs(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/utilisateurs`);
  }

  public getOneUtilisateur(utilisateurId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/utilisateurs/${utilisateurId}`);
  }

  public createUtilisateur(data: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/utilisateurs`, data);
  }

  public updateUtilisateur(data: any, utilisateurId: number): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/utilisateurs/${utilisateurId}`, data);
  }

  public deleteUtilisateur(utilisateurId: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/utilisateurs/${utilisateurId}`);
  }
}
