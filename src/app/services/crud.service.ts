import { Injectable } from '@angular/core';
import { Crud } from "../models/crud";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private url = "Crud";
  constructor(private http: HttpClient) { }

  public getCrud() : Observable<Crud[]> {
    return this.http.get<Crud[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateCrud(crud: Crud): Observable<Crud[]> {
    return this.http.put<Crud[]>(`${environment.apiUrl}/${this.url}`, crud);
  }

  public createCrud(crud: Crud): Observable<Crud[]> {
    return this.http.post<Crud[]>(`${environment.apiUrl}/${this.url}`, crud);
  }

  public deleteCrud(crud: Crud): Observable<Crud[]> {
    return this.http.delete<Crud[]>(`${environment.apiUrl}/${this.url}/${crud.id}`);
  }
}
