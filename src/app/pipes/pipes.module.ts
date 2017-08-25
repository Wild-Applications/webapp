import { NgModule } from '@angular/core';

import { ProductMatchesFilter, NameFilter } from './index';

@NgModule({
  declarations: [
    ProductMatchesFilter,
    NameFilter
  ],
  imports: [
  ],
  exports: [
    NameFilter,
    ProductMatchesFilter
  ]
})
export class PipesModule { }
