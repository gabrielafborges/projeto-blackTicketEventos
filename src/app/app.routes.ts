import { Routes } from '@angular/router';
import { InfoItemComponent } from './components/info-item/info-item.component';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { LoginAreaComponent } from './login-area/login-area.component';
import { SearchComponent } from './modals/search/search.component';

export const routes: Routes = [
    {path: '', component: AllEventsComponent },
    {path: 'info-eventos/:id', component: InfoItemComponent},
    {path: 'login', component: LoginAreaComponent},
    {path: 'modal', component: SearchComponent}
];
