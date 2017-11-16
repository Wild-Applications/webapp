import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule, Http, RequestOptions, XHRBackend } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule, MatCardModule, MatSnackBarModule, MatButtonModule, MAT_DATE_LOCALE, MatSlideToggleModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MatFormFieldModule } from '@angular/material';

import 'popper.js/dist/umd/popper';
import 'hammerjs';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { LoginComponent, LogoutComponent } from './login/index';
import { HomeComponent } from './home/index';
import { PageNotFoundComponent, ConfirmDeleteDialog } from './misc/index';


import { ManageModule } from './manage/index';
import { SettingsModule } from './settings/index';
import { TablesModule } from './tables/index';
import { MenusModule } from './menus/index';
import { ProductsModule } from './products/index';
import { OrdersModule } from './orders/index';
import { PaymentsModule } from './payments/index';
import { RegisterModule } from './register/index';
import { OnboardingModule } from './onboarding/index';
import { RecoverModule } from './recover/index';

import { AuthenticationService, LoadHandler, UserService, HttpService, PremisesService, TableService, MenuService, CacheService, ProductService, OrderService, PaymentsService, ErrorHandler, ErrorDialog } from './services/index';

import { AuthGuard, IsLoggedInGuard, NotAuthGuard } from './guards/index';

import { PipesModule } from './pipes/index';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function HttpInterceptorFactory(backend: XHRBackend, options: RequestOptions, router: Router, injector: Injector) {
  return new HttpService(backend, options, router, injector);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    PageNotFoundComponent,
    ConfirmDeleteDialog,
    ErrorDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routing,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    SettingsModule,
    ManageModule,
    TablesModule,
    MenusModule,
    ProductsModule,
    PipesModule,
    OrdersModule,
    RegisterModule,
    OnboardingModule,
    RecoverModule,
    PaymentsModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatFormFieldModule
  ],
  providers: [
    AuthenticationService,
    LoadHandler,
    {
      provide: Http,
      useFactory: HttpInterceptorFactory,
      deps: [XHRBackend, RequestOptions, Router, Injector]
    },
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    AuthGuard,
    IsLoggedInGuard,
    NotAuthGuard,
    UserService,
    PremisesService,
    TableService,
    MenuService,
    CacheService,
    ProductService,
    OrderService,
    PaymentsService,
    ErrorHandler
  ],
  entryComponents: [ ConfirmDeleteDialog, ErrorDialog ],
  bootstrap: [AppComponent]
})
export class AppModule { }
