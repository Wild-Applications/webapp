import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import {TabProgressButton } from './progress-button.ui';


@NgModule({
  declarations: [
    TabProgressButton
  ],
  exports: [
    TabProgressButton
  ]
})
export class UIModule { }
