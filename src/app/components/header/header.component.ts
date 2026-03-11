import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalSearchService } from '../../services/modal-search.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private serviceSearch = inject(ModalSearchService);

  openSearch(){
    this.serviceSearch.showModal()
  }
  
}