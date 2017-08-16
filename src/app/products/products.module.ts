import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { HttpModule, Http, RequestOptions, XHRBackend } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Router } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { HttpService } from '../services/index';

import { ProductsComponent } from './index';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function HttpInterceptorFactory(backend: XHRBackend, options: RequestOptions, router: Router, injector: Injector) {
  return new HttpService(backend, options, router, injector);
}

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    MaterialModule
  ],
  providers: [
  ]
})
export class ProductsModule { }
