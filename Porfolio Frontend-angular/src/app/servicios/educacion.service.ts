import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL: string = 'http://localhost:8080/educacion/';

  constructor(private httpClient: HttpClient) { }

  public ver(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.URL + 'ver');
  }

 /*  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  } */
}
