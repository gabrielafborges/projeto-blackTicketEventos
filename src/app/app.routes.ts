import { Routes } from '@angular/router';
import { InfoItemComponent } from './components/info-item/info-item.component';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { LoginAreaComponent } from './components/login-area/login-area.component';
import { SearchComponent } from './modals/search/search.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PaymentAreaComponent } from './components/payment-area/payment-area.component';
import { authLoginGuardGuard } from './guards/auth-login-guard.guard';
import { WalletTicketsComponent } from './components/wallet-tickets/wallet-tickets.component';

export const routes: Routes = [
    {path: '', component: AllEventsComponent },
    {path: 'info-eventos/:id', component: InfoItemComponent},
    {path: 'login', component: LoginAreaComponent},
    {path: 'modal', component: SearchComponent},
    {path: 'profileUser', component: UserProfileComponent},
    {path: 'payment', component: PaymentAreaComponent, canActivate: [authLoginGuardGuard]},
    {path: 'user-wallet', component: WalletTicketsComponent}
];
