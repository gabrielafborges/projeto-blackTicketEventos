import { Component, inject, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RequestLogin, Claim, UserToken, LoginResponse } from '../models/dataLogin'

@Component({
  selector: 'app-login-area',
  imports: [RouterModule, FormsModule],
  templateUrl: './login-area.component.html',
  styleUrl: './login-area.component.css'
})
export class LoginAreaComponent {
  private service = inject(AuthService);

  credentials: RequestLogin = {
  email: '',
  senha: ''
  }

  errorMessage: string = '';
  showError: boolean = false;

loggedIn(){
  this.service.login(this.credentials).subscribe({
    next: (res) => {
      console.log(res);
      
    },
    error: (erro) => {
      this.errorMessage = erro.error.errors[0];
      console.log(erro);
      
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 3000)
    }
    
  })
}

}
