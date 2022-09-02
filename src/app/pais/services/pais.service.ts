import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RESTCountriesResponse } from '../interfaces/pais.interface'
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';
  constructor( private http: HttpClient) { }

  buscarpais(termino: string): Observable<RESTCountriesResponse[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<RESTCountriesResponse[]>(url);
  }
  buscarCapital(termino: string): Observable<RESTCountriesResponse[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<RESTCountriesResponse[]>(url);
  }

  getPaisporAlpha(id: string): Observable<RESTCountriesResponse>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<RESTCountriesResponse>(url);
  }

}
