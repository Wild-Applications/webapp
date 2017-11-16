import { Routes } from '@angular/router';

import { LoginComponent, LogoutComponent } from './index';

import { AuthGuard, NotAuthGuard } from '../guards/index';

export const LoginRoutes: Routes = [
  { path:'login', component: LoginComponent, canActivate: [NotAuthGuard]},
  { path: 'logout', component: LogoutComponent }
]
