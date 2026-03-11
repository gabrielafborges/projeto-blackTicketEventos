import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { RouterOutlet, RouterLink } from '@angular/router';
import { SearchComponent } from "./modals/search/search.component";
import { ModalSearchService } from './services/modal-search.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    SearchComponent,
    RouterLink
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent{
  public serviceSearch = inject(ModalSearchService);
  
}
