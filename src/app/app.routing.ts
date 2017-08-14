import { Routes, RouterModule } from '@angular/router';

import { LoginRoutes } from './login/index';
import { HomeRoutes } from './home/index';
import { ManageRoutes } from './manage/index';

import { PageNotFoundComponent } from './misc/index';


const appRoutes: Routes = [
    ...LoginRoutes,
    ...HomeRoutes,
    ...ManageRoutes,

    // otherwise redirect to home or page not found
    { path: '', pathMatch: 'full', redirectTo: 'login'},
    { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
