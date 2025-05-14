
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidato } from './candidatos';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {
  baseUrl = 
 'https://raw.githubusercontent.com/kgarces/ISIS2603_202510_parcial2/refs/heads/main/jsons';

  private apiUrl: string = this.baseUrl;
  ;

  constructor(private http: HttpClient) { }

  getCandidatos(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/candidates.json');

  }
  getCandidato(id: string): Observable<Candidato> {
    return this.http.get<Candidato>(this.apiUrl + '/' + id +  '/candidates.json');
  }
  }

  

