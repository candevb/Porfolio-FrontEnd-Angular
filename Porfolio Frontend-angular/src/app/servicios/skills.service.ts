import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skills } from '../model/skills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  //URL: string = 'http://localhost:8080/skills/';
 URL: string = 'https://portfolioweb-vk30.onrender.com';

  constructor(private httpClient: HttpClient) { }

  public ver(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.URL + 'ver');
  }

 /*  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  } */
}