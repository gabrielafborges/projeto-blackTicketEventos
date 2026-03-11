import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalSearchService {
  
  isOpen = signal(false)
  showModal(){
    this.isOpen.set(true);
  }
  closeModal(){
    this.isOpen.set(false);
  }
  constructor() { }
}
