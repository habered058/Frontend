import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/components/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
];
