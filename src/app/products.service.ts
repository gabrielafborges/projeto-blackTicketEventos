import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class EventsService {
  private apiUrl = 'https://apidev.blackticket.com.br/Evento/ListarEventosDisponiveis'
  private http = inject(HttpClient);
  constructor() { }

  getEvents(){
    return this.http.get(this.apiUrl);
  }


}
