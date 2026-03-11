import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from '../models/events';


@Injectable({
  providedIn: 'root'
})

export class EventsService {
  private http = inject(HttpClient);// INJETANDO O METODO HTTP
  private readonly apiUrl = 'https://apidev.blackticket.com.br' // REQUEST
  
  constructor() { }

  getEvents(): Observable<Events[]>{
    return this.http.get<Events[]>(this.apiUrl + '/Evento/ListarEventosDisponiveis');
  }

  getEventoById(id: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/Evento/ObterEventoPorId/${id}`);
  }  
}
