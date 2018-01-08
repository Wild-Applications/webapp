import { Routes } from '@angular/router';

import { TermsAndConditionsComponent, CookiesComponent } from './index';

export const LegalRoutes: Routes = [
  { path:'legal', component: TermsAndConditionsComponent},
  { path: 'cookies', component: CookiesComponent }
]
