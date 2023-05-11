import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL: string = 'http://localhost:8080/experiencia/';

  constructor(private httpClient: HttpClient) { }

  public ver(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.URL + 'ver');
  }

 /*  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  } */
}