import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private baseUrl = 'https://backend-restaurant-ecf.herokuapp.com/api/rest/v1';

  constructor(private httpClient: HttpClient) { }

  public getCategories(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/categories`);
  }

  public getOneCategory(categoryId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/categories/${categoryId}`);
  }

  public createCategory(data: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/categories`, data);
  }

  public updateCategory(data: any, categoryId: number): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/categories/${categoryId}`, data);
  }

  public deleteCategory(categoryId: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/categories/${categoryId}`);
  }
}
