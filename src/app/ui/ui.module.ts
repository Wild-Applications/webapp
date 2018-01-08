import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import {TabProgressButton } from './progress-button.ui';

import { MatSpinner } from '@angular/material';


@NgModule({
  imports: [
  ],
  declarations: [
    TabProgressButton
  ],
  exports: [
    TabProgressButton
  ],
  entryComponents: [MatSpinner]
})
export class UIModule { }
