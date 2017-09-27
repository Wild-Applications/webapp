import { NgModule } from '@angular/core';

import { ProductMatchesFilter, NameFilter, DurationPipe } from './index';

@NgModule({
  declarations: [
    ProductMatchesFilter,
    NameFilter,
    DurationPipe
  ],
  imports: [
  ],
  exports: [
    NameFilter,
    ProductMatchesFilter,
    DurationPipe
  ]
})
export class PipesModule { }
