import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalSearchService } from '../../services/modal-search.service';
import { LoginAreaComponent } from '../login-area/login-area.component';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  private serviceSearch = inject(ModalSearchService);
  public authentication = inject(AuthService)

  nome: string = '';

  ngOnInit(){
    this.authentication.nomeUsuario.subscribe(nome => {
      this.nome = nome;
    });
  }
  
  openSearch(){
    this.serviceSearch.showModal()
  }
  
}