import { Routes } from '@angular/router';

import { LoginComponent, LogoutComponent } from './index';

export const LoginRoutes: Routes = [
  { path:'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent }
]
