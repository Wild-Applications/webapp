import { Routes } from '@angular/router';

import { OrdersComponent, PendingComponent, CompleteComponent } from './index';

import { AuthGuard } from '../guards/index';

export const OrderRoutes: Routes = [
  { path:'orders',
  component: OrdersComponent,
  canActivate: [AuthGuard],
  children: [
      { path: '', pathMatch: 'full', redirectTo: 'pending'},
      { path: 'pending', component: PendingComponent },
      { path: 'complete', component: CompleteComponent }
    ]
  }
]
