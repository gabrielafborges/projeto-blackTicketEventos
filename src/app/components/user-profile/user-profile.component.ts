import { Component, inject, OnInit } from '@angular/core';
import { UserPersonalData } from '../../models/profile';
import { AuthService } from '../../services/auth.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  imports: [DatePipe],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  private service = inject(AuthService);

  cliente: UserPersonalData | null = null;
  
  ngOnInit() {
    this.service.userAuthData().subscribe({
      next: (res) => {
        this.cliente = res;  
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
