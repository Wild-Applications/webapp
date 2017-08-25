import { Routes } from '@angular/router';


import { MenusComponent } from './index';
import { MenuComponent } from './index';


import { AuthGuard } from '../guards/index';

export const MenuRoutes: Routes = [
  { path:'menus',
  component: MenusComponent,
  canActivate: [AuthGuard],
  },
  { path: 'menus/:id',
  component: MenuComponent,
  canActivate: [AuthGuard]
  }
]
