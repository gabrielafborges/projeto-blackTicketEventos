import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventsService } from './products.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  private events  = inject(EventsService);
  ngOnInit() {
  this.events.getEvents().subscribe({
    next: (response) => {
      console.log('Sucesso:', response);
    },
    error: (error) => {
      console.error('Erro na requisição:', error);
    }
  });
}
}
