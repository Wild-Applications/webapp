import { Routes } from '@angular/router';

import { RecoverComponent, ResetComponent } from './index';

import { NotAuthGuard } from '../guards/index';

export const RecoverRoutes: Routes = [
  { path:'recover', component: RecoverComponent, canActivate: [NotAuthGuard] },
  { path: 'recover/:guid', component: ResetComponent, canActivate: [NotAuthGuard]}
]
