import { Component, inject, OnInit} from '@angular/core';
import { EventsService } from '../../services/products.service';
import { DatePipe } from '@angular/common';
import { Events } from '../../models/events';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-events',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './all-events.component.html',
  styleUrl: './all-events.component.css'
})


export class AllEventsComponent implements OnInit {
  private events = inject(EventsService);
  public dataEvents: Events[] = [];
  
  ngOnInit() {
    this.events.getEvents().subscribe({
      next: (response) => {
       this.dataEvents = response;
      },
      error: (error) => {
       console.error('Erro na requisição:', error);
      }
    });
  }
}





