import { Routes, RouterModule } from '@angular/router';

import { LoginRoutes } from './login/index';
import { HomeRoutes } from './home/index';
import { ManageRoutes } from './manage/index';
import { SettingsRoutes } from './settings/index';
import { OrderRoutes } from './orders/index';
import { RegisterRoutes } from './register/index';
import { RecoverRoutes } from './recover/index';
import { LegalRoutes } from './legal/index';

import { PageNotFoundComponent } from './misc/index';


const appRoutes: Routes = [
    ...LoginRoutes,
    ...HomeRoutes,
    ...ManageRoutes,
    ...SettingsRoutes,
    ...OrderRoutes,
    ...RegisterRoutes,
    ...RecoverRoutes,
    ...LegalRoutes,
    // otherwise redirect to home or page not found
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
