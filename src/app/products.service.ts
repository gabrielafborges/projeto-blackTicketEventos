import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  private apiUrl = 'https://apidev.blackticket.com.br/Evento/ListarEventosDisponiveis' // REQUEST
  
  private http = inject(HttpClient);// INJETANDO O METODO HTTP
  constructor() { }

  getEvents(): Observable<any>{
    return this.http.get(this.apiUrl);
  }


}
