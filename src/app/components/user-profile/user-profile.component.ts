import { Component, inject, OnInit } from '@angular/core';
import { UserPersonalData } from '../../models/profile';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  private service = inject(AuthService);

  // variável que o HTML vai usar para exibir os dados
  // null = ainda não chegou nada da API
  cliente: UserPersonalData | null = null;

  ngOnInit() {
    this.service.userAuthData().subscribe({
      next: (res) => {
        this.cliente = res;  // quando chegar, salva aqui
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
