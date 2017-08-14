import { Routes } from '@angular/router';

import { ManageComponent } from './index';

import { AuthGuard } from '../guards/index';

export const ManageRoutes: Routes = [
  { path:'manage', component: ManageComponent, canActivate: [AuthGuard] }
]
