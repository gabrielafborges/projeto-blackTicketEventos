import { Component, inject } from '@angular/core';
import { ModalSearchService } from '../../services/modal-search.service';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  private modalService = inject(ModalSearchService)
  modalIsOpen: boolean = true;

  showModal(){
    this.modalIsOpen = true;
  }
  closeModal(){
    this.modalIsOpen = false;
  }
  close(){
    this.modalService.closeModal();
  }

}
