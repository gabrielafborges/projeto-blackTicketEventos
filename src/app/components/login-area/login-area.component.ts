import { Component, inject, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RequestLogin, Claim, UserToken, LoginResponse } from '../../models/dataLogin'

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

loggedIn(){
  this.service.login(this.credentials).subscribe({
    next: (res) => {
      localStorage.setItem('accessToken', res.accessToken);
      
      this.auth();
      this.credentials.email = ''
      this.credentials.senha = ''
      this.router.navigate(['/profileUser'])
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
      console.log("AUTH: " + res);
    },
    error: (err) => {
      console.log(err);
    }
  })
}

}




