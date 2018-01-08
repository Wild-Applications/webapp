import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule, Http, RequestOptions, XHRBackend } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule, MatCardModule, MatSnackBarModule, MatButtonModule, MAT_DATE_LOCALE, MatSlideToggleModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MatFormFieldModule, MatDialogModule, MatGridListModule, MatInputModule, MatIconModule } from '@angular/material';

import 'popper.js/dist/umd/popper';
import 'hammerjs';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { LoginComponent, LogoutComponent } from './login/index';

import { PageNotFoundComponent, ConfirmDeleteDialog } from './misc/index';


import { ManageModule } from './manage/index';
import { SettingsModule } from './settings/index';
import { TablesModule } from './tables/index';
import { MenusModule } from './menus/index';
import { ProductsModule } from './products/index';
import { OrdersModule } from './orders/index';
import { PaymentsModule } from './payments/index';
import { RegisterModule } from './register/index';
import { RecoverModule } from './recover/index';
import { HomeModule } from './home/index';
import { UIModule } from './ui/ui.module';
import { LegalModule } from './legal/legal.module';

import { AuthenticationService, LoadHandler, UserService, HttpService, PremisesService, TableService, MenuService, CacheService, ProductService, OrderService, PaymentsService, ErrorHandler, ErrorDialog } from './services/index';

import { AuthGuard, IsLoggedInGuard, NotAuthGuard } from './guards/index';

import { PipesModule } from './pipes/index';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function HttpInterceptorFactory(backend: XHRBackend, options: RequestOptions, router: Router, injector: Injector, errorHandler: ErrorHandler) {
  return new HttpService(backend, options, router, injector, errorHandler);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
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
    RecoverModule,
    HomeModule,
    UIModule,
    LegalModule,
    PaymentsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatDialogModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [
    AuthenticationService,
    LoadHandler,
    ErrorHandler,
    {
      provide: Http,
      useFactory: HttpInterceptorFactory,
      deps: [XHRBackend, RequestOptions, Router, Injector, ErrorHandler]
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
    PaymentsService
  ],
  entryComponents: [ ConfirmDeleteDialog, ErrorDialog ],
  bootstrap: [AppComponent]
})
export class AppModule { }
