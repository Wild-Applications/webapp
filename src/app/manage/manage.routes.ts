import { Routes } from '@angular/router';

import { ManageComponent } from './index';
import { ManagePremisesComponent, ManageHoursComponent } from './index';

import { TablesComponent } from '../tables/index';

import { MenuRoutes } from '../menus/index';

import { ProductsComponent } from '../products/index';

import { AuthGuard } from '../guards/index';

export const ManageRoutes: Routes = [
  { path:'manage',
  component: ManageComponent,
  canActivate: [AuthGuard],
  children: [
    { path: '', pathMatch: 'full', redirectTo: 'general'},
    { path: 'general', component: ManagePremisesComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'hours', component: ManageHoursComponent },
    ...MenuRoutes,
    { path: 'products', component: ProductsComponent }
  ]
  }
]
