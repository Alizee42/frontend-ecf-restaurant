import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class GestionCategorieService {
  private baseUrl = 'https://backend-restaurant-ecf.herokuapp.com/api/rest/v1';

  constructor(private httpClient: HttpClient) { }

  public getCategories(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/categories`);
  }

  public getOneCategorie(categorieId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/categories/${categorieId}`);
  }

  public createCategorie(data: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/categories`, data);
  }

  public updateCategorie(data: any, categorieId: number): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/categories/${categorieId}`, data);
  }

  public deleteCategorie(categorieId: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/categories/${categorieId}`);
  }

  //Jusqu'ici
}

