import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { HttpModule, Http, RequestOptions, XHRBackend } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule, MatIconModule, MatTooltipModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';

import { HttpService } from '../services/index';

import { RecoverComponent, ResetComponent } from './index';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function HttpInterceptorFactory(backend: XHRBackend, options: RequestOptions, router: Router, injector: Injector) {
  return new HttpService(backend, options, router, injector);
}

@NgModule({
  declarations: [
    RecoverComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    HttpModule,
    RouterModule,
    NgbModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
  ]
})
export class RecoverModule { }
