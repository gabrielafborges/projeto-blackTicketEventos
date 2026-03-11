import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLogin, Claim, UserToken, LoginResponse } from '../models/dataLogin'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private http = inject(HttpClient);// INJETANDO O METODO HTTP
  private readonly apiUrl = 'https://apidev.blackticket.com.br' // REQUEST
  constructor() { }

  login(req: RequestLogin): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.apiUrl}/Usuario/Login`, req);
  }
}
