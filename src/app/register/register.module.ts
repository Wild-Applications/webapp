import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule, Http, RequestOptions, XHRBackend } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Router } from '@angular/router';
import { TruncateModule } from 'ng2-truncate';
import { MatProgressSpinnerModule, MatIconModule, MatTooltipModule, MatInputModule, MatFormFieldModule } from '@angular/material';

import { HttpService } from '../services/index';

import { PipesModule } from '../pipes/index';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { RegisterComponent } from './index';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function HttpInterceptorFactory(backend: XHRBackend, options: RequestOptions, router: Router, injector: Injector) {
  return new HttpService(backend, options, router, injector);
}

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    TruncateModule,
    PipesModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
  ],
  entryComponents: [ ]
})
export class RegisterModule { }
