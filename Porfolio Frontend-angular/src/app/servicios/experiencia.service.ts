import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  //URL: string = 'http://localhost:8080/experiencia/';
  URL: string = 'https://portfolioweb-vk30.onrender.com/experiencia/';

  constructor(private httpClient: HttpClient) { }

  public ver(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.URL + 'ver');
  }

  public crear(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'new', experiencia)
  }


 public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  } 

  public modificar(experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.URL + `modificar`, experiencia);
  } 
}