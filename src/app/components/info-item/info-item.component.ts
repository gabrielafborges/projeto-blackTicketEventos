import { RouterLink } from '@angular/router';
import { Component, inject, OnInit} from '@angular/core';
import { EventsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe} from '@angular/common';

@Component({
  selector: 'app-info-item',
  imports: [DatePipe, RouterLink],
  templateUrl: './info-item.component.html',
  styleUrl: './info-item.component.css'
})

export class InfoItemComponent implements OnInit {
  private service = inject(EventsService);
  private route   = inject(ActivatedRoute);

  evento: any = null;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getEventoById(id).subscribe({
      next:  (res) => console.log(this.evento = res),
      error: (err) => console.log(err)
    })
  }
}
