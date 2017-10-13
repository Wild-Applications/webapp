import { Routes } from '@angular/router';

import { OnboardingComponent, PremisesComponent, PaymentComponent } from './index';

import { AuthGuard } from '../guards/index';

export const OnboardingRoutes: Routes = [
  { path:'setup',
  component: OnboardingComponent,
  canActivate: [AuthGuard],
  children: [
      {path: '', pathMatch: 'full', redirectTo: 'premises'},
      {path: 'premises', component: PremisesComponent},
      {path: 'payments', component: PaymentComponent}
    ]
  }
]
