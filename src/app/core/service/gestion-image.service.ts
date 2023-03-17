import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class GestionImageService {

  private baseUrl = 'https://backend-restaurant-ecf.herokuapp.com/api/rest/v1';

  constructor(private httpClient: HttpClient) { }

  public getImages(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/images`);
  }

  public getOneImage(imageId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/images/${imageId}`);
  }

  public createImage(data: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/images`, data);
  }

  public updateImage(data: any, imageId: number): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/images/${imageId}`, data);
  }

  public deleteImage(imageId: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/images/${imageId}`);
  }
}
