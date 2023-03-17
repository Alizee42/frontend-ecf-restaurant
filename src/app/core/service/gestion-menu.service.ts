import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GestionMenuService {

  private baseUrl = 'https://backend-restaurant-ecf.herokuapp.com/api/rest/v1';

  constructor(private httpClient: HttpClient) { }

  public getMenus(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/menus`);
  }

  public getOneMenu(menuId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/menus/${menuId}`);
  }

  public createMenu(data: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/menus`, data);
  }

  public updateMenu(data: any, menuId: number): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/menus/${menuId}`, data);
  }

  public deleteMenu(menuId: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/menus/${menuId}`);
  }
}
