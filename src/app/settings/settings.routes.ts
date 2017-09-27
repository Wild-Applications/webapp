import { Routes } from '@angular/router';

import { SettingsComponent } from './index';
import { GeneralSettingsComponent } from './index';
import { PaymentsComponent } from '../payments/index';

import { AuthGuard } from '../guards/index';

export const SettingsRoutes: Routes = [
  { path:'settings',
  component: SettingsComponent,
  canActivate: [AuthGuard],
  children: [
    { path: '', pathMatch: 'full', redirectTo:'general'},
    { path: 'general', component: GeneralSettingsComponent },
    { path: 'payments', component: PaymentsComponent }
  ] }
]
