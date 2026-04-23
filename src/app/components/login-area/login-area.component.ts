import { Component, inject, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RequestLogin, LoginResponse } from '../../models/dataLogin'

@Component({
  selector: 'app-login-area',
  imports: [RouterModule, FormsModule],
  templateUrl: './login-area.component.html',
  styleUrl: './login-area.component.css'
})
export class LoginAreaComponent {
  private service = inject(AuthService);
   private router  = inject(Router);

  credentials: RequestLogin = {
  email: '',
  senha: ''
  }

  tokenUser: LoginResponse = {
   accessToken: '',
   expiresIn: '',
   refreshToken: '',
   usuarioToken: {
    id: '',
    email: '',
    claims: []
   }
  }

  errorMessage: string = '';
  showError: boolean = false;
  nome: string = '';

loggedIn(){
  this.service.login(this.credentials).subscribe({
    next: (res) => {
      localStorage.setItem('accessToken', res.accessToken);
      
      this.auth();
      this.credentials.email = ''
      this.credentials.senha = ''
      
      this.router.navigate(['/user-wallet'])
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

auth(){
  this.service.userAuthData().subscribe({
    next: (res) => {
      this.service.nomeUsuario.next(res.nome);
      console.log("AUTH: " + res);
      console.log('nome do ususario: ', this.service.nomeUsuario);
      
    },
    error: (err) => {
      console.log(err);
    }
  })
}

}




