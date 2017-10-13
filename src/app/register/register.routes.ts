import { Routes } from '@angular/router';
import { IsLoggedInGuard } from '../guards/index';

import { RegisterComponent } from './index';

export const RegisterRoutes: Routes = [
  { path:'register',
  canActivate: [IsLoggedInGuard],
  component: RegisterComponent}
]
