import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { HttpModule, Http, RequestOptions, XHRBackend } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Router } from '@angular/router';
import { TruncateModule } from 'ng2-truncate';
import { MatProgressSpinnerModule, MatIconModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

import { HttpService } from '../services/index';

import { ProductsComponent, AddProductDialog } from './index';

import { PipesModule } from '../pipes/index';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    ProductsComponent,
    AddProductDialog
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
    TruncateModule,
    PipesModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
  ],
  entryComponents: [ AddProductDialog ]
})
export class ProductsModule { }
