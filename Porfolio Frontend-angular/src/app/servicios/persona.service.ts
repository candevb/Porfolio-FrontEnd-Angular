import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL: string = 'http://localhost:8080/personas/';
  //URL: string = 'https://portfolio-backend-g7nd.onrender.com/';
  
  constructor(private httpClient: HttpClient) { }

  public getPersonas(): Observable<Persona>{
    return this.httpClient.get<Persona>(this.URL + 'ver');
  }

  public save(persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'new', persona);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

  public edit(persona: Persona): Observable<Persona> {
    return this.httpClient.put<Persona>(this.URL + 'modificar', persona);
  }


}
