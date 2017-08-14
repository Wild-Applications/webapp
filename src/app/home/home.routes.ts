import { Routes } from '@angular/router';

import { HomeComponent } from './index';

import { AuthGuard } from '../guards/index';

export const HomeRoutes: Routes = [
  { path:'home', component: HomeComponent, canActivate: [AuthGuard] }
]
