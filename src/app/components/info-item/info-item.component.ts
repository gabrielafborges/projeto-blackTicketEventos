import { RouterLink } from '@angular/router';
import { Component, inject, OnInit} from '@angular/core';
import { EventsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, CurrencyPipe} from '@angular/common';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-info-item',
  imports: [DatePipe, RouterLink, CurrencyPipe, FormsModule],
  templateUrl: './info-item.component.html',
  styleUrl: './info-item.component.css'
})

export class InfoItemComponent implements OnInit {
  private service = inject(EventsService);
  private route   = inject(ActivatedRoute);

  openModal: boolean = false;
  
  evento: any = null;
  
  ticketCounter: number = 0;
  addTicket(){
    this.ticketCounter++;
  }
  removeTicket(){
    this.ticketCounter--;
  }
  
  showModal(){
    return this.openModal = true;
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getEventoById(id).subscribe({
      next:  (res) => {
        this.evento = res;
      },
      error: (err) => console.log(err)
    })
  }
}
