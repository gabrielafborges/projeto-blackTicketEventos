import { Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventsService } from './products.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  private events  = inject(EventsService);

  public dadosEventos: any[] = [];

  ngOnInit() {
  this.events.getEvents().subscribe({
    next: (response) => {
      console.log('Sucesso:', response);
      this.dadosEventos = response;
    },
    error: (error) => {
      console.error('Erro na requisição:', error);
    }
  });
}
}
