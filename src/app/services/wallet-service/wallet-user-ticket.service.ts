import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userWallet } from '../../models/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletUserTicketService {
  private http = inject(HttpClient);
  private urlApi = `https://apidev.blackticket.com.br/Evento/ListarEventosDisponiveis`
  constructor() { }

  listarEventosDisponiveis(): Observable<userWallet[]>{
    return this.http.get<userWallet[]>(this.urlApi);
  }
}
