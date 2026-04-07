import { Component, inject, OnInit } from '@angular/core';
import { WalletUserTicketService } from '../../services/wallet-service/wallet-user-ticket.service';
import { userWallet } from '../../models/wallet';

@Component({
  selector: 'app-wallet-tickets',
  imports: [],
  templateUrl: './wallet-tickets.component.html',
  styleUrl: './wallet-tickets.component.css'
})
export class WalletTicketsComponent implements OnInit{
  private _listarEventos = inject(WalletUserTicketService)

  public carteiraDeIngressos: userWallet[] | null = null;

  ngOnInit() {
    this._listarEventos.listarEventosDisponiveis().subscribe({
      next: (res) => {
        this.carteiraDeIngressos = res;
        console.log('TESTE', this.carteiraDeIngressos);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
