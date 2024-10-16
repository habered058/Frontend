import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/components/login/login.component';
import { SpaceComponent } from './features/spaces/component/space/space.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'space', component: SpaceComponent },
];
