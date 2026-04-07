import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { RequestLogin, LoginResponse } from '../models/dataLogin'
import { UserPersonalData } from '../models/profile';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private http = inject(HttpClient);// INJETANDO O METODO HTTP
  private readonly apiUrl = 'https://apidev.blackticket.com.br' // REQUEST
  constructor() { }

  nomeUsuario = new BehaviorSubject<string>('');

  login(req: RequestLogin): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.apiUrl}/Usuario/Login`, req);
  }

  userAuthData(): Observable<UserPersonalData>{
    return this.http.get<UserPersonalData>(`${this.apiUrl}/Cliente/ObterDadosClienteAutenticado`)
  }
}
