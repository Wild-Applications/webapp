webpackJsonp([0],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authenticationService, userService, translate) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.username = "User";
        this.title = 'app';
        this.userService.userChange.subscribe(function (user) {
            _this.username = user.username;
        });
        translate.setDefaultLang('en');
        translate.use('en');
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.template.html"),
        styles: [__webpack_require__("../../../../../src/app/app.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_popper_js_dist_umd_popper__ = __webpack_require__("../../../../popper.js/dist/umd/popper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_popper_js_dist_umd_popper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_popper_js_dist_umd_popper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_index__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__misc_index__ = __webpack_require__("../../../../../src/app/misc/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__manage_index__ = __webpack_require__("../../../../../src/app/manage/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__settings_index__ = __webpack_require__("../../../../../src/app/settings/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tables_index__ = __webpack_require__("../../../../../src/app/tables/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__menus_index__ = __webpack_require__("../../../../../src/app/menus/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__products_index__ = __webpack_require__("../../../../../src/app/products/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__orders_index__ = __webpack_require__("../../../../../src/app/orders/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__payments_index__ = __webpack_require__("../../../../../src/app/payments/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__register_index__ = __webpack_require__("../../../../../src/app/register/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__recover_index__ = __webpack_require__("../../../../../src/app/recover/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__guards_index__ = __webpack_require__("../../../../../src/app/guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipes_index__ = __webpack_require__("../../../../../src/app/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* unused harmony export HttpLoaderFactory */
/* unused harmony export HttpInterceptorFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function HttpInterceptorFactory(backend, options, router, injector, errorHandler) {
    return new __WEBPACK_IMPORTED_MODULE_26__services_index__["a" /* HttpService */](backend, options, router, injector, errorHandler);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__login_index__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__login_index__["b" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_index__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__misc_index__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_16__misc_index__["b" /* ConfirmDeleteDialog */],
            __WEBPACK_IMPORTED_MODULE_26__services_index__["b" /* ErrorDialog */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_29__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_18__settings_index__["a" /* SettingsModule */],
            __WEBPACK_IMPORTED_MODULE_17__manage_index__["a" /* ManageModule */],
            __WEBPACK_IMPORTED_MODULE_19__tables_index__["a" /* TablesModule */],
            __WEBPACK_IMPORTED_MODULE_20__menus_index__["a" /* MenusModule */],
            __WEBPACK_IMPORTED_MODULE_21__products_index__["a" /* ProductsModule */],
            __WEBPACK_IMPORTED_MODULE_28__pipes_index__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_22__orders_index__["a" /* OrdersModule */],
            __WEBPACK_IMPORTED_MODULE_24__register_index__["a" /* RegisterModule */],
            __WEBPACK_IMPORTED_MODULE_25__recover_index__["a" /* RecoverModule */],
            __WEBPACK_IMPORTED_MODULE_23__payments_index__["a" /* PaymentsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MatDialogModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_26__services_index__["c" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_26__services_index__["d" /* LoadHandler */],
            __WEBPACK_IMPORTED_MODULE_26__services_index__["e" /* ErrorHandler */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
                useFactory: HttpInterceptorFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_26__services_index__["e" /* ErrorHandler */]]
            },
            { provide: __WEBPACK_IMPORTED_MODULE_9__angular_material__["h" /* MAT_DATE_LOCALE */], useValue: 'en-GB' },
            { provide: __WEBPACK_IMPORTED_MODULE_9__angular_material__["i" /* ErrorStateMatcher */], useClass: __WEBPACK_IMPORTED_MODULE_9__angular_material__["j" /* ShowOnDirtyErrorStateMatcher */] },
            __WEBPACK_IMPORTED_MODULE_27__guards_index__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_27__guards_index__["b" /* IsLoggedInGuard */],
            __WEBPACK_IMPORTED_MODULE_27__guards_index__["c" /* NotAuthGuard */],
            __WEBPACK_IMPORTED_MODULE_26__services_index__["f" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_26__services_index__["g" /* PremisesService */],
            __WEBPACK_IMPORTED_MODULE_26__services_index__["h" /* TableService */],
            __WEBPACK_IMPORTED_MODULE_26__services_index__["i" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_26__services_index__["j" /* CacheService */],
            __WEBPACK_IMPORTED_MODULE_26__services_index__["k" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_26__services_index__["l" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_26__services_index__["m" /* PaymentsService */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_16__misc_index__["b" /* ConfirmDeleteDialog */], __WEBPACK_IMPORTED_MODULE_26__services_index__["b" /* ErrorDialog */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_index__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manage_index__ = __webpack_require__("../../../../../src/app/manage/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_index__ = __webpack_require__("../../../../../src/app/settings/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__orders_index__ = __webpack_require__("../../../../../src/app/orders/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_index__ = __webpack_require__("../../../../../src/app/register/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recover_index__ = __webpack_require__("../../../../../src/app/recover/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__misc_index__ = __webpack_require__("../../../../../src/app/misc/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });









var appRoutes = __WEBPACK_IMPORTED_MODULE_1__login_index__["c" /* LoginRoutes */].concat(__WEBPACK_IMPORTED_MODULE_2__home_index__["b" /* HomeRoutes */], __WEBPACK_IMPORTED_MODULE_3__manage_index__["e" /* ManageRoutes */], __WEBPACK_IMPORTED_MODULE_4__settings_index__["e" /* SettingsRoutes */], __WEBPACK_IMPORTED_MODULE_5__orders_index__["e" /* OrderRoutes */], __WEBPACK_IMPORTED_MODULE_6__register_index__["c" /* RegisterRoutes */], __WEBPACK_IMPORTED_MODULE_7__recover_index__["d" /* RecoverRoutes */], [
    // otherwise redirect to home or page not found
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__misc_index__["a" /* PageNotFoundComponent */] }
]);
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/app.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "html {\n  height: 100%;\n  width: 100%; }\n\nbody {\n  height: 100%;\n  width: 100%; }\n\n.bg-faded {\n  background-color: #7BA7E1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.template.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-light bg-faded\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/home']\">{{'APP.NAME' | translate}}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-md-0\">\n      <li class=\"nav-item\" [hidden]=\"!authenticationService.isLoggedIn()\">\n        <a class=\"nav-link\" [routerLink]=\"['/home']\">{{'NAV.DASHBOARD' | translate}}</a>\n      </li>\n      <li class=\"nav-item\" [hidden]=\"!authenticationService.isLoggedIn()\">\n        <a class=\"nav-link\" [routerLink]=\"['/orders']\">{{'NAV.ORDERS' | translate}}</a>\n      </li>\n      <li class=\"nav-item\" [hidden]=\"!authenticationService.isLoggedIn()\">\n        <a class=\"nav-link\" [routerLink]=\"['/manage']\">{{'NAV.MANAGE' | translate}}</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" [hidden]=\"authenticationService.isLoggedIn()\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">{{'NAV.LOGIN' | translate}}</a>\n      </li>\n      <li class=\"nav-item dropdown\" [hidden]=\"!authenticationService.isLoggedIn()\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{username}}\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/settings']\">{{'NAV.SETTINGS' | translate}}</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['/logout']\">{{'NAV.LOGOUT' | translate}}</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n<router-outlet class=\"root\"></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NotAuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IsLoggedInGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (router, state) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var NotAuthGuard = (function () {
    function NotAuthGuard(router) {
        this.router = router;
    }
    NotAuthGuard.prototype.canActivate = function (router, state) {
        if (localStorage.getItem('currentUser')) {
            this.router.navigate(['/home']);
            return false;
        }
        return true;
    };
    return NotAuthGuard;
}());
NotAuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], NotAuthGuard);

var IsLoggedInGuard = (function () {
    function IsLoggedInGuard(router) {
        this.router = router;
    }
    IsLoggedInGuard.prototype.canActivate = function (router, state) {
        if (!localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/home']);
        return false;
    };
    return IsLoggedInGuard;
}());
IsLoggedInGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], IsLoggedInGuard);

var _a, _b, _c;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["c"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(route, router, userService, errorHandler, premisesService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.errorHandler = errorHandler;
        this.premisesService = premisesService;
        this.setup = {};
        this.validSetup = false;
        this.loadingSetup = true;
        this.setupLoadError = true;
        this.premises = {};
        this.premisesLoadError = false;
        this.user = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.userChange.subscribe(function (user) {
            _this.user = user;
        });
        this.userService.setupVerification()
            .subscribe(function (data) {
            _this.setup = data;
            if (data.premises && data.payment && data.menu && data.active) {
                _this.validSetup = true;
                _this.loadingSetup = false;
            }
        }, function (error) {
            if (error.status >= 400 && error.status < 500) {
                //deal with the error
                _this.setupLoadError = true;
            }
        });
        this.premisesService.get()
            .subscribe(function (data) {
            _this.premises = data;
        }, function (error) {
            _this.premisesLoadError = true;
        });
    };
    HomeComponent.prototype.changePremisesStatus = function () {
        var _this = this;
        //this.premises.open = !this.premises.open;
        if (this.premises.open) {
            //previously it was closes, now we want to open it
            this.premisesService.open()
                .subscribe(function (data) {
                //do nothing
            }, function (error) {
                _this.premises.open = !_this.premises.open;
                _this.errorHandler.show(error);
            });
        }
        else {
            //close it
            this.premisesService.close()
                .subscribe(function (data) {
                //do nothing
            }, function (error) {
                _this.premises.open = !_this.premises.open;
                _this.errorHandler.show(error);
                ;
            });
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/home/home.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* ErrorHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* ErrorHandler */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* PremisesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* PremisesService */]) === "function" && _e || Object])
], HomeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_index__ = __webpack_require__("../../../../../src/app/guards/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutes; });


var HomeRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["a" /* AuthGuard */]] }
];
//# sourceMappingURL=home.routes.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row full-height\">\n    <div class=\"col-3 display-block full-height\">\n      <!-- User Header-->\n      <mat-card>\n        <mat-card-header>\n          <!--<div mat-card-avatar class=\"\"></div>-->\n          <mat-card-title *ngIf=\"!premisesLoadError\">{{premises.name}}</mat-card-title>\n          <mat-card-title *ngIf=\"premisesLoadError\">{{'ERRORS.LOAD_FAILED' | translate}}</mat-card-title>\n          <mat-card-subtitle>{{user.verififed}}</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n\n        </mat-card-content>\n      </mat-card>\n      <br/>\n      <mat-card>\n        <mat-card-header>\n          <mat-card-title>{{'HOME.PREMISES_STATUS' | translate}}</mat-card-title>\n          <mat-card-subtitle *ngIf=\"!validSetup\">Setup Incomplete</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content><mat-slide-toggle [disabled]=\"!validSetup\" [(ngModel)]=\"premises.open\" (change)=\"changePremisesStatus()\" color=\"primary\">{{premises.open ? ('HOME.OPEN' | translate):('HOME.CLOSED' | translate)}}</mat-slide-toggle></mat-card-content>\n      </mat-card>\n    </div>\n    <div class=\"col-6 display-block full-height \">\n      <mat-card>\n        <mat-card-header>{{'HOME.DASHBOARD' | translate}}</mat-card-header>\n      </mat-card>\n      <br/>\n      <mat-card *ngIf=\"!validSetup\">\n        <mat-card-header>{{'HOME.TODO' | translate}}</mat-card-header>\n        <mat-card-content>\n          <div class=\"row center-spinner\" *ngIf=\"loadingSetup\"><mat-spinner></mat-spinner></div>\n          <table class=\"table\" *ngIf=\"!loadingSetup && !setupLoadError\">\n            <tr *ngIf=\"!setup.premises\">\n              <td class=\"col-9\">Create a premises</td>\n              <td matButton class=\"col-3 text-align-right\"><button>Take me there</button></td>\n            </tr>\n            <tr *ngIf=\"!setup.payment\">\n              <td class=\"col-9\">Setup payments</td>\n              <td class=\"col-3 text-align-right\"><button>Take me there</button></td>\n            </tr>\n            <tr *ngIf=\"!setup.menu\">\n              <td class=\"col-9\">Create a menu</td>\n              <td class=\"col-3 text-align-right\"><button>Take me there</button></td>\n            </tr>\n            <tr *ngIf=\"!setup.active\">\n              <td class=\"col-9\">Make a menu active</td>\n              <td class=\"col-3 text-align-right\"><button>Take me there</button></td>\n            </tr>\n          </table>\n          <h6 *ngIf=\"!loadingSetup && setupLoadError\">{{'ERRORS.LOAD_FAILED' | translate}}</h6>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  <div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_routes__ = __webpack_require__("../../../../../src/app/home/home.routes.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__home_routes__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logout_component__ = __webpack_require__("../../../../../src/app/login/logout.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__logout_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_routes__ = __webpack_require__("../../../../../src/app/login/login.routes.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__login_routes__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, userService, errorHandler) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.errorHandler = errorHandler;
        this.model = {};
        this.loading = false;
        this.error = undefined;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
        if (this.authenticationService.isLoggedIn()) {
            this.router.navigate([this.returnUrl]);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.error = undefined;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            console.log(error);
            if (error.status >= 400 && error.status < 500) {
                //deal with the error
                _this.error = error._body.message;
            }
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/login/login.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* ErrorHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* ErrorHandler */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_index__ = __webpack_require__("../../../../../src/app/guards/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutes; });


var LoginRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["c" /* NotAuthGuard */]] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* LogoutComponent */] }
];
//# sourceMappingURL=login.routes.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12\">\n      <h2>{{'LOGIN.LOGIN' | translate}}</h2>\n      <h6>{{error}}</h6>\n        <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && login()\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{'has-error':f.submitted && !username.valid }\">\n          <label for=\"username\">{{'LOGIN.USERNAME' | translate}}</label>\n          <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n          <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">{{'USERNAME_IS_REQUIRED' | translate}}</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">{{'LOGIN.PASSWORD' | translate}}</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">{{'PASSWORD_IS_REQUIRED' | translate}}</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">{{'LOGIN.LOGIN' | translate}}</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/recover']\" class=\"btn btn-link\">{{'LOGIN.FORGOTTEN' | translate}}</a>\n        </div>\n        <div class=\"form-group\">\n          <a [routerLink]=\"['/register']\" class=\"btn btn-link no-padding\">{{'LOGIN.REGISTER' | translate}}</a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: ''
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* AuthenticationService */]) === "function" && _c || Object])
], LogoutComponent);

var _a, _b, _c;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage/children/hours.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageHoursComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageHoursComponent = (function () {
    function ManageHoursComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.model = {};
    }
    ManageHoursComponent.prototype.ngOnInit = function () {
    };
    ManageHoursComponent.prototype.saveChanges = function () {
        alert('Save Changes not implemented');
    };
    return ManageHoursComponent;
}());
ManageHoursComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/manage/children/hours.template.html"),
        styles: [__webpack_require__("../../../../../src/app/manage/manage.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* UserService */]) === "function" && _c || Object])
], ManageHoursComponent);

var _a, _b, _c;
//# sourceMappingURL=hours.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage/children/hours.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <h3>{{'MANAGE.HOURS.OPENING_HOURS' | translate}}</h3>\n  </div>\n  <div class=\"row justify-content-center\">\n    <span>{{'MANAGE.HOURS.DESCRIPTION' | translate}}</span>\n  </div>\n  <div class=\"row justify-content-center\">\n    <button type=\"button\" class=\"btn btn-primary half-width rounded\">{{'GENERAL.ADD' | translate}}</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/manage/children/premises.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagePremisesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManagePremisesComponent = (function () {
    function ManagePremisesComponent(route, router, userService, premisesService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.premisesService = premisesService;
        this.model = {};
        this.loading = true;
    }
    ManagePremisesComponent.prototype.ngOnInit = function () {
        this.getPremises();
    };
    ManagePremisesComponent.prototype.getPremises = function () {
        var _this = this;
        this.premisesService.get()
            .subscribe(function (data) {
            _this.loading = false;
            _this.model = data;
        }, function (error) {
            if (error._body.code == '0015') {
                //user hasnt created a premises so create the premises rather than update it
                _this.premisesService.create({ name: _this.userService.getLoggedInUser().username })
                    .subscribe(function (data) {
                    //do nothing
                    _this.model.name = _this.userService.getLoggedInUser().username;
                    _this.loading = false;
                }, function (error) {
                    alert(error);
                    _this.loading = false;
                });
            }
            _this.loading = false;
        });
    };
    ManagePremisesComponent.prototype.saveChanges = function () {
        this.premisesService.put(this.model)
            .subscribe(function (data) {
            //do nothing
        }, function (error) {
            alert(error);
        });
    };
    return ManagePremisesComponent;
}());
ManagePremisesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/manage/children/premises.template.html"),
        styles: [__webpack_require__("../../../../../src/app/manage/manage.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* PremisesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* PremisesService */]) === "function" && _d || Object])
], ManagePremisesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=premises.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage/children/premises.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <h3>{{'MANAGE.GENERAL' | translate}}</h3>\n  </div>\n  <div class=\"row\" *ngIf=\"loading\">\n    <div class=\"row center-spinner\"><mat-spinner></mat-spinner></div>\n  </div>\n  <div class=\"row align-items-center\" *ngIf=\"!loading\">\n    <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && saveChanges()\" novalidate class=\"col-12\">\n      <div class=\"form-group col-lg-12 col-md-12 col-sm-12 col-xs-12\" [ngClass]=\"{'has-error':f.submitted && !name.valid }\">\n        <div class=\"row\">\n          <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\n            <label for=\"name\">{{'MANAGE.NAME' | translate}}</label>\n          </div>\n          <div class=\"col-lg-6\">\n            <mat-form-field class=\"full-width\">\n              <input type=\"text\" matInput class=\"form-control\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\" required />\n            </mat-form-field>\n          </div>\n        </div>\n        <div *ngIf=\"f.submitted && !name.valid\" class=\"help-block\">{{'MANAGE.NAME_REQUIRED' | translate}}</div>\n      </div>\n\n      <div class=\"form-group col-12\" [ngClass]=\"{'has-error':f.submitted && !description.valid }\">\n        <div class=\"row\">\n          <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\n            <label for=\"description\">{{'MANAGE.DESCRIPTION' | translate}}</label>\n          </div>\n          <div class=\"col-lg-9 col-md-9 col-sm-12 col-xs-12\">\n            <mat-form-field class=\"full-width\">\n              <textarea matInput type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"model.description\" #description=\"ngModel\" maxlength=\"255\"></textarea>\n            </mat-form-field>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-lg-3\"></div>\n          <div class=\"col-lg-9\">\n            <button [disabled]=\"loading || name.invalid || description.invalid\" class=\"btn btn-primary rounded\">{{'GENERAL.SAVE_CHANGES' | translate}}</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/manage/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__children_premises_component__ = __webpack_require__("../../../../../src/app/manage/children/premises.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__children_premises_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__children_hours_component__ = __webpack_require__("../../../../../src/app/manage/children/hours.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__children_hours_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_component__ = __webpack_require__("../../../../../src/app/manage/manage.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__manage_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manage_routes__ = __webpack_require__("../../../../../src/app/manage/manage.routes.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__manage_routes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manage_module__ = __webpack_require__("../../../../../src/app/manage/manage.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__manage_module__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/manage/manage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageComponent = (function () {
    function ManageComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.hasPremises = false;
    }
    ManageComponent.prototype.ngOnInit = function () {
    };
    return ManageComponent;
}());
ManageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/manage/manage.template.html"),
        styles: [__webpack_require__("../../../../../src/app/manage/manage.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* UserService */]) === "function" && _c || Object])
], ManageComponent);

var _a, _b, _c;
//# sourceMappingURL=manage.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage/manage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index__ = __webpack_require__("../../../../../src/app/manage/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var ManageModule = (function () {
    function ManageModule() {
    }
    return ManageModule;
}());
ManageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__index__["b" /* ManageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__index__["c" /* ManagePremisesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__index__["d" /* ManageHoursComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["p" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["o" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["q" /* MatInputModule */]
        ],
        providers: []
    })
], ManageModule);

//# sourceMappingURL=manage.module.js.map

/***/ }),

/***/ "../../../../../src/app/manage/manage.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("../../../../../src/app/manage/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tables_index__ = __webpack_require__("../../../../../src/app/tables/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menus_index__ = __webpack_require__("../../../../../src/app/menus/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_index__ = __webpack_require__("../../../../../src/app/products/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_index__ = __webpack_require__("../../../../../src/app/guards/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageRoutes; });






var ManageRoutes = [
    { path: 'manage',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* ManageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_index__["a" /* AuthGuard */]],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'general' },
            { path: 'general', component: __WEBPACK_IMPORTED_MODULE_0__index__["c" /* ManagePremisesComponent */] },
            { path: 'tables', component: __WEBPACK_IMPORTED_MODULE_1__tables_index__["b" /* TablesComponent */] },
            { path: 'hours', component: __WEBPACK_IMPORTED_MODULE_0__index__["d" /* ManageHoursComponent */] }
        ].concat(__WEBPACK_IMPORTED_MODULE_2__menus_index__["g" /* MenuRoutes */], [
            { path: 'products', component: __WEBPACK_IMPORTED_MODULE_3__products_index__["b" /* ProductsComponent */] }
        ])
    }
];
//# sourceMappingURL=manage.routes.js.map

/***/ }),

/***/ "../../../../../src/app/manage/manage.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\n  margin-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage/manage.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row full-height\">\n    <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12 display-block auto-height\">\n      <!-- User Header-->\n      <div class=\"col-12\">\n\n      </div>\n      <!--Settings List-->\n      <div class=\"col-12 btn-group-vertical side-list\">\n        <a [routerLink]=\"['/manage/general']\" class=\"btn btn-outline-secondary\" role=\"button\" aria-pressed=\"true\">{{'MANAGE.GENERAL' | translate}} <i class=\"arrow right\"></i></a>\n      <!--  <a [routerLink]=\"['/manage/hours']\" class=\"btn btn-outline-secondary\" role=\"button\" aria-pressed=\"true\">Opening Hours <i class=\"arrow right\"></i></a>-->\n        <a [routerLink]=\"['/manage/tables']\" class=\"btn btn-outline-secondary\" role=\"button\" aria-pressed=\"true\">{{'MANAGE.TABLES.TABLES' | translate}} <i class=\"arrow right\"></i></a>\n        <a [routerLink]=\"['/manage/menus']\" class=\"btn btn-outline-secondary\" role=\"button\" aria-pressed=\"true\">{{'MANAGE.MENUS.MENUS' | translate}} <i class=\"arrow right\"></i></a>\n        <a [routerLink]=\"['/manage/products']\" class=\"btn btn-outline-secondary\" role=\"button\" aria-pressed=\"true\">{{'MANAGE.PRODUCTS.PRODUCTS' | translate}} <i class=\"arrow right\"></i></a>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-md-9 col-sm-12 col-xs-12 display-block auto-height bg-white\">\n      <router-outlet></router-outlet>\n    </div>\n  <div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/menus/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menus_component__ = __webpack_require__("../../../../../src/app/menus/menus.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__menus_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__menus_component__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_component__ = __webpack_require__("../../../../../src/app/menus/menu.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__menu_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__menu_component__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__menu_component__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menus_module__ = __webpack_require__("../../../../../src/app/menus/menus.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__menus_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_routes__ = __webpack_require__("../../../../../src/app/menus/menu.routes.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__menu_routes__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/menus/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__misc_index__ = __webpack_require__("../../../../../src/app/misc/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_index__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_index__ = __webpack_require__("../../../../../src/app/products/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SectionDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TruncateModule } from 'ng2-truncate';




var MenuComponent = (function () {
    function MenuComponent(route, router, menuService, dialog, cacheService, productService) {
        this.route = route;
        this.router = router;
        this.menuService = menuService;
        this.dialog = dialog;
        this.cacheService = cacheService;
        this.productService = productService;
        this.menu = {};
        this.contents = [];
        this.loading = true;
        this.availableProducts = [];
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.menuService.get(params.id)
                .subscribe(function (data) {
                _this.menu = data;
                _this.loading = false;
            }, function (error) {
                //this.loading = false;
                alert(error);
                _this.loading = false;
            });
        });
        this.getAvailableProducts();
    };
    MenuComponent.prototype.getAvailableProducts = function () {
        var _this = this;
        this.productService.getAll()
            .subscribe(function (data) {
            _this.availableProducts = data.products;
        }, function (error) {
            alert(error);
        });
    };
    MenuComponent.prototype.filterProducts = function (section) {
        var choosableProducts = this.availableProducts.filter(function (product) {
            var keep = true;
            section.products.forEach(function (containedProduct) {
                if (containedProduct._id == product._id) {
                    keep = false;
                }
            });
            return keep;
        });
        return choosableProducts;
    };
    MenuComponent.prototype.openAddSectionDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(SectionDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            if (typeof result != 'undefined') {
                _this.menu.contents[_this.menu.contents.length] = { title: result.name, products: [] };
                _this.saveMenu();
            }
        });
    };
    MenuComponent.prototype.move = function (up, sectionIndex) {
        var section = this.menu.contents[sectionIndex];
        this.menu.contents.splice(sectionIndex, 1);
        if (up) {
            this.menu.contents.splice(sectionIndex - 1, 0, section);
        }
        else {
            //down
            this.menu.contents.splice(sectionIndex + 1, 0, section);
        }
    };
    MenuComponent.prototype.deleteSection = function (sectionIndex) {
        var _this = this;
        console.log(this.contents);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__misc_index__["b" /* ConfirmDeleteDialog */], {
            data: { params: { type: "section", name: this.menu.contents[sectionIndex].title } }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.contents.splice(sectionIndex, 1);
                _this.saveMenu();
            }
            else {
                //keep it
            }
        });
    };
    MenuComponent.prototype.removeProduct = function (sectionIndex, productIndex) {
        this.menu.contents[sectionIndex].products.splice(productIndex, 1);
        this.saveMenu();
    };
    MenuComponent.prototype.addProductDialog = function (sectionIndex) {
        var _this = this;
        var dialogRef = this.dialog.open(AddDialog, {
            //width: '50%',
            panelClass: 'menu-add-product-dialog'
        });
        dialogRef.componentInstance.available = this.filterProducts(this.menu.contents[sectionIndex]);
        dialogRef.componentInstance.chosen = this.menu.contents[sectionIndex].products.slice(0);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.menu.contents[sectionIndex].products = result.products;
                _this.availableProducts = _this.availableProducts.concat(result.newProducts);
                _this.saveMenu();
            }
        });
    };
    MenuComponent.prototype.editSection = function (sectionIndex) {
        var _this = this;
        var dialogRef = this.dialog.open(SectionDialog);
        dialogRef.componentInstance.toEdit = this.menu.contents[sectionIndex].title;
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.menu.contents[sectionIndex].title = result.name;
                _this.saveMenu();
            }
        });
    };
    MenuComponent.prototype.saveMenu = function () {
        this.menuService.putContents(this.menu)
            .subscribe(function (data) {
        }, function (error) {
            alert(error);
        });
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/menus/menu.template.html"),
        styles: [__webpack_require__("../../../../../src/app/menus/menus.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_index__["i" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_index__["i" /* MenuService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_index__["j" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_index__["j" /* CacheService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_index__["k" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_index__["k" /* ProductService */]) === "function" && _f || Object])
], MenuComponent);

var SectionDialog = (function () {
    function SectionDialog(dialogRef, translate) {
        this.dialogRef = dialogRef;
        this.translate = translate;
        this.model = {};
        this.editing = false;
    }
    SectionDialog.prototype.ngOnInit = function () {
        if (typeof this.toEdit != 'undefined') {
            this.editing = true;
            this.model.name = this.toEdit;
        }
    };
    SectionDialog.prototype.close = function () {
        this.dialogRef.close(undefined);
    };
    SectionDialog.prototype.submit = function () {
        this.dialogRef.close(this.model);
    };
    return SectionDialog;
}());
SectionDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-section-dialog',
        template: __webpack_require__("../../../../../src/app/menus/modals/add.modal.html")
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialogRef */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _h || Object])
], SectionDialog);

var AddDialog = (function () {
    function AddDialog(dialogRef, translate, dialog, productService) {
        this.dialogRef = dialogRef;
        this.translate = translate;
        this.dialog = dialog;
        this.productService = productService;
        this.new = [];
    }
    AddDialog.prototype.ngOnInit = function () {
        if (typeof this.available == 'undefined') {
            this.available = [];
        }
        if (typeof this.chosen == 'undefined') {
            this.chosen = [];
        }
    };
    AddDialog.prototype.select = function (index) {
        this.chosen[this.chosen.length] = this.available[index];
        this.available.splice(index, 1);
    };
    AddDialog.prototype.remove = function (index) {
        this.available[this.available.length] = this.chosen[index];
        this.chosen.splice(index, 1);
    };
    AddDialog.prototype.addNew = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__products_index__["c" /* AddProductDialog */], {
            width: '30%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (typeof result != 'undefined') {
                var newProduct_1 = new __WEBPACK_IMPORTED_MODULE_5__models_index__["a" /* Product */]();
                newProduct_1.name = result.name;
                newProduct_1.price = +result.price;
                newProduct_1.description = result.description;
                _this.productService.create(newProduct_1)
                    .subscribe(function (data) {
                    newProduct_1._id = data._id;
                    _this.new[_this.new.length] = newProduct_1;
                    _this.chosen = [newProduct_1].concat(_this.chosen);
                }, function (error) {
                    alert(error);
                });
            }
        });
    };
    AddDialog.prototype.close = function () {
        this.dialogRef.close(undefined);
    };
    AddDialog.prototype.submit = function () {
        this.dialogRef.close({ products: this.chosen, newProducts: this.new });
    };
    return AddDialog;
}());
AddDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-product-dialog',
        template: __webpack_require__("../../../../../src/app/menus/modals/addProduct.modal.html"),
        styles: [__webpack_require__("../../../../../src/app/menus/menus.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialogRef */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDialog */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_7__services_index__["k" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_index__["k" /* ProductService */]) === "function" && _m || Object])
], AddDialog);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/menus/menu.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("../../../../../src/app/menus/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_index__ = __webpack_require__("../../../../../src/app/guards/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuRoutes; });



var MenuRoutes = [
    { path: 'menus',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* MenusComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["a" /* AuthGuard */]],
    },
    { path: 'menus/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["c" /* MenuComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["a" /* AuthGuard */]]
    }
];
//# sourceMappingURL=menu.routes.js.map

/***/ }),

/***/ "../../../../../src/app/menus/menu.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row align-items-center\">\n    <h3>{{menu.name}} {{'MENUS.CONTENTS' | translate}}</h3>\n  </div>\n  <div class=\"row\" *ngIf=\"loading\">\n    <div class=\"row center-spinner\"><mat-spinner></mat-spinner></div>\n  </div>\n  <div class=\"row justify-content-center\" *ngIf=\"!loading\">\n    <button type=\"button\" class=\"btn btn-primary half-width rounded\" (click)=\"openAddSectionDialog()\">{{'MENUS.ADD_SECTION' | translate}}</button>\n  </div>\n  <div class=\"row\" *ngIf=\"!loading\">\n    <table class=\"table\">\n      <ng-container *ngFor=\"let section of menu.contents; let sectionIndex = index;\">\n        <thead class=\"thead-default\">\n          <tr>\n            <th colspan=\"2\">{{section.title}}</th>\n            <th>\n              <!--<mat-icon matTooltip=\"{{'MENUS.MOVE_SECTION_UP' | translate}}\" matTooltipPosition=\"above\" class=\"side-by-side\" (click)=\"move(true, sectionIndex)\">arrow_upward</mat-icon>\n              <mat-icon matTooltip=\"{{'MENUS.MOVE_SECTION_DOWN' | translate}}\" matTooltipPosition=\"above\" class=\"side-by-side\" (click)=\"move(false, sectionIndex)\">arrow_downward</mat-icon>-->\n              <mat-icon matTooltip=\"{{'GENERAL.EDIT' | translate}}\" matTooltipPosition=\"above\" class=\"\" (click)=\"editSection(sectionIndex)\">mode_edit_outline</mat-icon>\n              <mat-icon matTooltip=\"{{'MENUS.DELETE_SECTION' | translate}}\" matTooltipPosition=\"above\" class=\"\" (click)=\"deleteSection(sectionIndex)\">delete_forever</mat-icon>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let product of section.products; let productIndex = index;\">\n            <td class=\"col-6\">{{product.name}}</td>\n            <td class=\"col-4\">{{product.price | currency:'GBP':true}}</td>\n            <td class=\"col-2\"><mat-icon matTooltip=\"{{'GENERAL.REMOVE' | translate}}\" matTooltipPosition=\"above\" class=\"side-by-side\" (click)=\"removeProduct(sectionIndex, productIndex)\">remove_circle_outline</mat-icon></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\"><a href=\"javascript:void(0);\" (click)=\"addProductDialog(sectionIndex)\">{{'MENUS.ADD_PRODUCT' | translate}}</a></td>\n          </tr>\n          <tr><td></td></tr>\n        </tbody>\n      </ng-container>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/menus/menus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__misc_index__ = __webpack_require__("../../../../../src/app/misc/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_index__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MenuDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




//import { TruncateModule } from 'ng2-truncate';



var MenusComponent = (function () {
    function MenusComponent(route, router, menuService, dialog, cacheService) {
        this.route = route;
        this.router = router;
        this.menuService = menuService;
        this.dialog = dialog;
        this.cacheService = cacheService;
        this.menus = [];
        this.loading = true;
    }
    MenusComponent.prototype.ngOnInit = function () {
        this.getMenus();
    };
    MenusComponent.prototype.getMenus = function () {
        var _this = this;
        this.menuService.getAll()
            .subscribe(function (data) {
            _this.loading = false;
            _this.menus = data.menus;
        }, function (error) {
            _this.loading = false;
            alert(error);
        });
    };
    MenusComponent.prototype.makeActive = function (index) {
        var _this = this;
        this.menuService.makeActive(this.menus[index]._id)
            .subscribe(function (data) {
            for (var i = 0; i < _this.menus.length; i++) {
                _this.menus[i].active = false;
            }
            _this.menus[index].active = true;
        }, function (error) {
            alert(error);
        });
    };
    MenusComponent.prototype.selectMenu = function (index) {
        this.cacheService.put(this.menus[index]._id, this.menus[index]);
        this.router.navigate(['/manage/menus/', this.menus[index]._id]);
    };
    MenusComponent.prototype.openAddDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(MenuDialog, {
            width: '20%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (typeof result != 'undefined') {
                var newMenu_1 = new __WEBPACK_IMPORTED_MODULE_5__models_index__["b" /* Menu */]();
                newMenu_1.name = result.name;
                _this.menuService.create(newMenu_1)
                    .subscribe(function (data) {
                    newMenu_1._id = data;
                    _this.menus = [newMenu_1].concat(_this.menus);
                }, function (error) {
                    alert(error);
                });
            }
        });
    };
    MenusComponent.prototype.deleteConfirmation = function (index, event) {
        var _this = this;
        event.stopPropagation();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__misc_index__["b" /* ConfirmDeleteDialog */]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                //delete it
                _this.menuService.delete(_this.menus[index]._id)
                    .subscribe(function (data) {
                    _this.menus.splice(index, 1);
                }, function (error) {
                    alert(error);
                });
            }
            else {
                //keep it
            }
        });
    };
    MenusComponent.prototype.editMenu = function (index, event) {
        var _this = this;
        event.stopPropagation();
        var dialogRef = this.dialog.open(MenuDialog, {
            width: '20%',
            data: this.menus[index]
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.menuService.put(result)
                    .subscribe(function (data) {
                    _this.menus[index] = result;
                }, function (error) {
                    alert(error);
                });
            }
        });
    };
    return MenusComponent;
}());
MenusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/menus/menus.template.html"),
        styles: [__webpack_require__("../../../../../src/app/menus/menus.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_index__["i" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_index__["i" /* MenuService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_index__["j" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_index__["j" /* CacheService */]) === "function" && _e || Object])
], MenusComponent);

var MenuDialog = (function () {
    function MenuDialog(dialogRef, translate, data) {
        this.dialogRef = dialogRef;
        this.translate = translate;
        this.data = data;
        this.model = {};
        this.toEdit = {};
        this.update = false;
        if (data) {
            this.model = data;
            this.update = true;
        }
    }
    MenuDialog.prototype.close = function () {
        this.dialogRef.close(undefined);
    };
    MenuDialog.prototype.submit = function () {
        this.dialogRef.close(this.model);
    };
    return MenuDialog;
}());
MenuDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-menu-dialog',
        template: __webpack_require__("../../../../../src/app/menus/modals/addMenu.modal.html")
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialogRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _g || Object, Object])
], MenuDialog);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=menus.component.js.map

/***/ }),

/***/ "../../../../../src/app/menus/menus.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_truncate__ = __webpack_require__("../../../../ng2-truncate/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__index__ = __webpack_require__("../../../../../src/app/menus/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_index__ = __webpack_require__("../../../../../src/app/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var MenusModule = (function () {
    function MenusModule() {
    }
    return MenusModule;
}());
MenusModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__index__["b" /* MenusComponent */],
            __WEBPACK_IMPORTED_MODULE_10__index__["d" /* MenuDialog */],
            __WEBPACK_IMPORTED_MODULE_10__index__["c" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__index__["e" /* SectionDialog */],
            __WEBPACK_IMPORTED_MODULE_10__index__["f" /* AddDialog */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_11__pipes_index__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_truncate__["a" /* TruncateModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["o" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["p" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["q" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["u" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["t" /* MatListModule */]
        ],
        providers: [],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_10__index__["d" /* MenuDialog */], __WEBPACK_IMPORTED_MODULE_10__index__["e" /* SectionDialog */], __WEBPACK_IMPORTED_MODULE_10__index__["f" /* AddDialog */]]
    })
], MenusModule);

//# sourceMappingURL=menus.module.js.map

/***/ }),

/***/ "../../../../../src/app/menus/menus.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\n  margin-top: 10px; }\n\n.mat-icon.side-by-side {\n  display: table-cell; }\n\n.product_selector:focus {\n  outline: none; }\n\n.product_selector {\n  border: none; }\n\n.display-inline-block {\n  display: inline-block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menus/menus.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <h3>{{'MENUS.MENUS' | translate}}</h3>\n  </div>\n  <div class=\"row\">\n    <span>{{'MENUS.DESCRIPTION' | translate}}</span>\n  </div>\n  <div class=\"row justify-content-center\">\n    <button type=\"button\" class=\"btn btn-primary half-width rounded\" (click)=\"openAddDialog()\">{{'GENERAL.ADD' | translate}}</button>\n  </div>\n  <div class=\"row\" *ngIf=\"loading\">\n    <div class=\"row center-spinner\"><mat-spinner></mat-spinner></div>\n  </div>\n  <div class=\"row\" *ngIf=\"!loading\">\n    <table class=\"table\">\n      <tr>\n        <td colspan=\"4\"><input md-input placeholder=\"Filter\" type=\"text\" [(ngModel)]=\"searchCriteria\" class=\"float-right\"></td>\n      <tr>\n      <tr *ngFor=\"let menu of menus | nameFilter:searchCriteria; let i = index\" (click)=\"selectMenu(i)\">\n        <ng-container *ngIf=\"menu !== -1\">\n          <td class=\"col-6\">{{menu.name}}</td>\n          <td class=\"col-4\">\n            <button type=\"button\" *ngIf=\"!menu.active\" class=\"btn btn-outline-primary rounded\" (click)=\"$event.stopPropagation();makeActive(i)\">Make Active</button>\n            <button type=\"button\" *ngIf=\"menu.active\" class=\"btn btn-outline-primary rounded\" disabled>Active</button>\n          </td>\n          <td class=\"col-2\">\n            <mat-icon matTooltip=\"{{'GENERAL.EDIT' | translate}}\" matTooltipPosition=\"above\" class=\"side-by-side\" (click)=\"editMenu(i, $event)\">edit</mat-icon>\n            <mat-icon matTooltip=\"{{'GENERAL.DELETE' | translate}}\" matTooltipPosition=\"above\" class=\"side-by-side\" (click)=\"deleteConfirmation(i, $event)\">delete_forever</mat-icon>\n          </td>\n        </ng-container>\n        <td class=\"align-center\" colspan=\"4\" *ngIf=\"menu == -1\">{{'SEARCH.NO_MATCHES'}}</td>\n      </tr>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/menus/modals/add.modal.html":
/***/ (function(module, exports) {

module.exports = "<h3 md-dialog-title>{{'MENUS.ADD_SECTION' | translate}}</h3>\n<div md-dialog-content>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Name\" type=\"text\" [(ngModel)]=\"model.name\" required>\n  </mat-form-field>\n</div>\n<div md-dialog-actions class=\"text-align-right\">\n    <button mat-button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">{{'GENERAL.CANCEL' | translate}}</button>\n    <button mat-raised-button color=\"primary\" type=\"button\" class=\"btn btn-default\" (click)=\"submit()\">{{'GENERAL.ADD' | translate}}</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/menus/modals/addMenu.modal.html":
/***/ (function(module, exports) {

module.exports = "<h3 md-dialog-title [hidden]=\"update\">{{'MENUS.ADD_MENU' | translate}}</h3>\n<h3 md-dialog-title [hidden]=\"!update\">{{'MENUS.EDIT_MENU' | translate}}</h3>\n<div md-dialog-content>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Name\" type=\"text\" [(ngModel)]=\"model.name\" required maxlength=\"100\" #name=\"ngModel\">\n  </mat-form-field>\n</div>\n<div md-dialog-actions class=\"text-align-right\">\n    <button mat-button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">{{'GENERAL.CANCEL' | translate}}</button>\n    <button mat-raised-button color=\"primary\" [hidden]=\"update\" type=\"button\" class=\"btn btn-default\" (click)=\"submit()\" [disabled]=\"name.invalid\">{{'GENERAL.ADD' | translate}}</button>\n    <button mat-raised-button color=\"primary\" [hidden]=\"!update\" type=\"button\" class=\"btn btn-default\" (click)=\"submit()\" [disabled]=\"name.invalid\">{{'GENERAL.SAVE' | translate}}</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/menus/modals/addProduct.modal.html":
/***/ (function(module, exports) {

module.exports = "<h3 mat-dialog-title>{{'MENUS.ADD_MENU' | translate}}</h3>\n<mat-dialog-content class=\"mat-dialog-content display-inline-block col-6 no-padding vertical-align-top\">\n  <div>\n    <mat-selection-list #selectedProducts class=\"hide-select-boxes no-outline\">\n      <mat-list-option *ngFor=\"let product of available; let i = index\" [value]=\"i\" (selectionChange)=\"select(i)\"><span>{{product.name}} <mat-icon class=\"float-right\">chevron_right</mat-icon></span></mat-list-option>\n    </mat-selection-list>\n  </div>\n</mat-dialog-content>\n<mat-dialog-content class=\"mat-dialog-content display-inline-block col-6 no-padding vertical-align-top\">\n  <div>\n    <mat-selection-list #chosenProducts class=\"hide-select-boxes align-text-right no-outline\">\n      <mat-list-option *ngFor=\"let product of chosen; let i = index;\" [value]=\"i\" (selectionChange)=\"remove(i)\"><span><mat-icon class=\"float-left\">chevron_left</mat-icon><span class=\"float-right\">{{product.name}}</span></span></mat-list-option>\n    </mat-selection-list>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n\n    <button mat-raised-button color=\"primary\" type=\"button\" class=\"btn btn-default\" (click)=\"addNew()\">{{'GENERAL.ADD' | translate}}</button>\n    <span class=\"float-right\">\n    <button mat-button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">{{'GENERAL.CANCEL' | translate}}</button>\n    <button mat-raised-button color=\"primary\" type=\"button\" class=\"btn btn-default\" (click)=\"submit()\">{{'GENERAL.SAVE' | translate}}</button>\n  </span>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/misc/confirmDelete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDeleteDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ConfirmDeleteDialog = (function () {
    function ConfirmDeleteDialog(dialogRef, translate, data) {
        this.dialogRef = dialogRef;
        this.translate = translate;
        this.data = data;
        this.params = {};
        if (data && data.params) {
            this.params = data.params;
        }
    }
    ConfirmDeleteDialog.prototype.ngOnInit = function () {
    };
    ConfirmDeleteDialog.prototype.no = function () {
        this.dialogRef.close(false);
    };
    ConfirmDeleteDialog.prototype.yes = function () {
        this.dialogRef.close(true);
    };
    return ConfirmDeleteDialog;
}());
ConfirmDeleteDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'confirm-delete-dialog',
        template: __webpack_require__("../../../../../src/app/misc/confirmDelete.template.html")
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object, Object])
], ConfirmDeleteDialog);

var _a, _b;
//# sourceMappingURL=confirmDelete.component.js.map

/***/ }),

/***/ "../../../../../src/app/misc/confirmDelete.template.html":
/***/ (function(module, exports) {

module.exports = "<h3 md-dialog-title>{{'MODALS.CONFIRMATION' | translate}}</h3>\n<div md-dialog-content>\n  {{'GENERAL.CONFIRM_DELETE' | translate:params }}\n</div>\n<div md-dialog-actions class=\"text-align-right\">\n    <button mat-button type=\"button\" class=\"btn btn-default\" (click)=\"no()\">{{'GENERAL.CANCEL' | translate}}</button>\n    <button mat-raised-button color=\"primary\" type=\"button\" class=\"btn btn-default\" (click)=\"yes()\">{{'GENERAL.DELETE' | translate}}</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/misc/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pagenotfound_component__ = __webpack_require__("../../../../../src/app/misc/pagenotfound.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pagenotfound_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__confirmDelete_component__ = __webpack_require__("../../../../../src/app/misc/confirmDelete.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__confirmDelete_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/misc/pagenotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: '<div class="container"><h1>Page not found</h1></div>'
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=pagenotfound.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product__ = __webpack_require__("../../../../../src/app/models/product.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__product__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__premises__ = __webpack_require__("../../../../../src/app/models/premises.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table__ = __webpack_require__("../../../../../src/app/models/table.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu__ = __webpack_require__("../../../../../src/app/models/menu.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__menu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order__ = __webpack_require__("../../../../../src/app/models/order.ts");
/* unused harmony namespace reexport */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/models/menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Menu; });
var Menu = (function () {
    function Menu() {
    }
    return Menu;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ "../../../../../src/app/models/order.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Order */
var Order = (function () {
    function Order() {
    }
    return Order;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ "../../../../../src/app/models/premises.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Premises */
var Premises = (function () {
    function Premises() {
    }
    return Premises;
}());

//# sourceMappingURL=premises.js.map

/***/ }),

/***/ "../../../../../src/app/models/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product() {
    }
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/models/table.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Table; });
var Table = (function () {
    function Table() {
    }
    return Table;
}());

//# sourceMappingURL=table.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/orders/children/complete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





__WEBPACK_IMPORTED_MODULE_4_moment__["locale"]('en');

var CompleteComponent = (function () {
    function CompleteComponent(route, router, orderService, dialog) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.orderService = orderService;
        this.dialog = dialog;
        this.highlighted = [];
        this.loading = true;
        this.inFlight = false;
        this.loadingOrders = true;
        this.selectedDay = {};
        this.breakdown = [];
        this.today = new Date();
        this.max = new Date();
        this.selected = new Date();
        this.canSelectNext = true;
        this.canSelectPrevious = true;
        this.myFilter = function (d) {
            var day = d.getDate();
            var month = d.getMonth();
            var year = d.getFullYear();
            for (var i = 0; i < _this.breakdown.length; i++) {
                var nextBreakdown = _this.breakdown[i];
                if (nextBreakdown._id.year == year && nextBreakdown._id.month == month && nextBreakdown._id.day == day) {
                    return true;
                }
            }
            return false;
            // Prevent Saturday and Sunday from being selected.
        };
    }
    CompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getOrderBreakdown();
        this.orderCall = __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].interval(30000).subscribe(function (x) {
            _this.getOrders(false);
        });
        this.Math = Math;
    };
    CompleteComponent.prototype.dateChanged = function (date) {
        this.getOrders(true);
        this.canNextOrPreviousDay();
    };
    CompleteComponent.prototype.canNextOrPreviousDay = function () {
        var day = this.selected.getDate();
        var month = this.selected.getMonth();
        var year = this.selected.getFullYear();
        var canNext = false;
        var canPrev = false;
        for (var i = 0; i < this.breakdown.length; i++) {
            var nextBreakdown = this.breakdown[i]._id;
            if (nextBreakdown.year < year) {
                canPrev = true;
            }
            else if (nextBreakdown.year == year) {
                //check month next
                if (nextBreakdown.month < month) {
                    canPrev = true;
                }
                else if (nextBreakdown.month == month) {
                    //check day
                    if (nextBreakdown.day < day) {
                        canPrev = true;
                    }
                    else if (nextBreakdown.day == day) {
                        canPrev = true;
                        canNext = true;
                    }
                    else {
                        canNext = true;
                    }
                }
                else {
                    canNext = true;
                }
            }
            else {
                //breakdown year is greater than selected year
                canNext = true;
            }
        }
        this.canSelectNext = canNext;
        this.canSelectPrevious = canPrev;
    };
    CompleteComponent.prototype.nextDay = function () {
        var day = this.selected.getDate();
        var month = this.selected.getMonth();
        var year = this.selected.getFullYear();
        for (var i = 0; i < this.breakdown.length; i++) {
            var nextBreakdown = this.breakdown[i]._id;
            if (nextBreakdown.year == year && nextBreakdown.month == month && nextBreakdown.day == day) {
                var nextDate = new Date(this.breakdown[i - 1]._id.year + "/" + (this.breakdown[i - 1]._id.month + 1) + "/" + this.breakdown[i - 1]._id.day);
                this.selected = nextDate;
                this.getOrders(true);
            }
        }
    };
    CompleteComponent.prototype.previousDay = function () {
        var day = this.selected.getDate();
        var month = this.selected.getMonth();
        var year = this.selected.getFullYear();
        for (var i = 0; i < this.breakdown.length; i++) {
            var nextBreakdown = this.breakdown[i]._id;
            if (nextBreakdown.year == year && nextBreakdown.month == month && nextBreakdown.day == day) {
                var nextDate = new Date(this.breakdown[i + 1]._id.year + "/" + (this.breakdown[i + 1]._id.month + 1) + "/" + this.breakdown[i + 1]._id.day);
                this.selected = nextDate;
                this.getOrders(true);
            }
        }
    };
    CompleteComponent.prototype.ngOnDestroy = function () {
        this.orderCall.unsubscribe();
    };
    CompleteComponent.prototype.getOrderBreakdown = function () {
        var _this = this;
        this.loading = true;
        this.orderService.getOrderBreakdown()
            .subscribe(function (data) {
            _this.breakdown = data.breakdown;
            _this.selected = new Date(_this.breakdown[_this.breakdown.length - 1]._id.year + "/" + (_this.breakdown[_this.breakdown.length - 1]._id.month + 1) + "/" + _this.breakdown[_this.breakdown.length - 1]._id.day);
            _this.canNextOrPreviousDay();
            _this.getOrders(true);
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
        });
    };
    CompleteComponent.prototype.getOrders = function (override) {
        var _this = this;
        //if override and , do a new request
        //if inFlight dont do on
        if (override || !this.inFlight) {
            this.loadingOrders = true;
            if (this.currentRequest) {
                this.currentRequest.unsubscribe();
            }
            var dateToUse = new Date();
            if (this.selected) {
                dateToUse = this.selected;
            }
            var year = dateToUse.getFullYear();
            var month = dateToUse.getMonth();
            var day = dateToUse.getDate();
            this.inFlight = true;
            this.currentRequest = this.orderService.getCompleteByDay(year, month, day)
                .subscribe(function (data) {
                _this.inFlight = false;
                _this.loadingOrders = false;
                _this.orders = data.orders;
                for (var i = 0; i < _this.orders.length; i++) {
                    _this.highlighted[i] = { left: [], right: [] };
                }
            }, function (error) {
                _this.inFlight = false;
                _this.loadingOrders = false;
                alert(error);
            });
        }
        else {
        }
    };
    return CompleteComponent;
}());
CompleteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/orders/children/complete.template.html"),
        styles: [__webpack_require__("../../../../../src/app/orders/orders.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_index__["l" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_index__["l" /* OrderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDialog */]) === "function" && _d || Object])
], CompleteComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=complete.component.js.map

/***/ }),

/***/ "../../../../../src/app/orders/children/complete.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container order-container\">\n  <div class=\"row order-title\">\n      <h3>{{'ORDERS.ORDERS' | translate}}</h3>\n  </div>\n  <div class=\"row\" *ngIf=\"loading\">\n    <div class=\"row center-spinner\"><mat-spinner></mat-spinner></div>\n  </div>\n  <div class=\"row justify-content-center\" *ngIf=\"!loading\">\n    <button type=\"button\" class=\"btn btn-primary half-width rounded\" (click)=\"getOrders()\">{{'GENERAL.REFRESH' | translate}}</button>\n  </div>\n  <div class=\"row justify-content-center\" *ngIf=\"!loading\">\n    <div class=\"col-4 text-align-center\">\n      <button type=\"button\" class=\"btn btn-primary half-width rounded\" (click)=\"previousDay()\" [disabled]=\"!canSelectPrevious\">{{'ORDERS.PREV_DAY' | translate}}</button>\n    </div>\n    <div class=\"col-4 text-align-center\">\n      <mat-form-field class=\"full-width\">\n        <input matInput [matDatepicker]=\"picker\" [matDatepickerFilter]=\"myFilter\" placeholder=\"Choose a date\" (dateChange)=\"dateChanged($event.value)\" [(ngModel)]=\"selected\" [max]=\"today\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker touchUi=\"true\" [startAt]=\"selected\"></mat-datepicker>\n      </mat-form-field>\n    </div>\n    <div class=\"col-4 text-align-center\">\n      <button type=\"button\" class=\"btn btn-primary half-width rounded\" (click)=\"nextDay()\" [disabled]=\"!canSelectNext\">{{'ORDERS.NEXT_DAY' | translate}}</button>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"!loading\">\n    <div class=\"container\">\n      <div class=\"row full-height\" [hidden]=\"loadingOrders || orders.length > 0\"><h3>{{'ORDERS.NO_ORDERS' | translate}}</h3></div>\n      <div class=\"row center-spinner\" [hidden]=\"!loadingOrders\"><mat-spinner></mat-spinner></div>\n      <div class=\"row full-height\" [hidden]=\"loadingOrders || orders.length < 1\">\n        <div class=\"col-lg-12 col-mat-12 col-sm-12 col-xs-12 auto-height order\" *ngFor=\"let order of orders; let o = index;\">\n          <div class=\"order-inner\">\n            <div class=\"col-12\">\n              <div class=\"display-inline-block\">\n                <h6>{{order.subtotal | currency:'gbp':'symbol'}}</h6>\n              </div>\n              <div class=\"display-inline-block float-right\">\n                <h6 class=\"display-inline-block\">{{order.status}}</h6>\n                <div class=\"dropdown display-inline-block\">\n                  <button class=\"btn btn-sm btn-outline-primary btn-no-outline btn-no-focus btn-no-active btn-no-hover\" type=\"button\" id=\"orderActions\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"arrow down no-top-margin\"></i>\n                  </button>\n                  <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"orderActions\">\n                    <a class=\"dropdown-item\" href=\"javascript:null;\">{{'ORDERS.DELETE' | translate}}</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12\">\n              <div class=\"row\">\n                <div class=\"col-lg-6 col-mat-6 col-sm-12 col-xs-12\">\n                  <mat-list>\n                    <mat-list-item *ngFor=\"let product of order.products.slice(0,Math.ceil(order.products.length/2)); let p = index\"> <mat-icon matListIcon (click)=\"highlighted[o].left[p]=!highlighted[o].left[p]\">{{!highlighted[o].left[p]?'label_outline':'label'}}</mat-icon>{{product.name}}</mat-list-item>\n                  </mat-list>\n                </div>\n                <div class=\"col-lg-6 col-mat-6 col-sm-12 col-xs-12\">\n                  <mat-list>\n                    <mat-list-item *ngFor=\"let product of order.products.slice(Math.ceil(order.products.length/2)); let p = index;\"><mat-icon matListIcon (click)=\"highlighted[o].right[p]=!highlighted[o].right[p]\">{{!highlighted[o].right[p]?'label_outline':'label'}}</mat-icon>{{product.name}}</mat-list-item>\n                  </mat-list>\n                </div>\n              </div>\n            </div>\n            </div>\n          </div>\n        </div>\n      <div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/orders/children/pending.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PendingComponent = (function () {
    function PendingComponent(route, router, orderService, dialog, errorHandler) {
        this.route = route;
        this.router = router;
        this.orderService = orderService;
        this.dialog = dialog;
        this.errorHandler = errorHandler;
        this.now = __WEBPACK_IMPORTED_MODULE_4_moment__(new Date());
        this.highlighted = [];
        this.loading = true;
        this.inFlight = false;
        this.lastCallTime = __WEBPACK_IMPORTED_MODULE_4_moment__(new Date()).subtract(3, 'months');
        this.audio = new Audio();
        this.completedMarkers = {};
    }
    PendingComponent.prototype.checkScroll = function (event) {
    };
    PendingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderCall = __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].interval(30000).subscribe(function (x) {
            _this.getOrders();
        });
        this.getOrders();
        this.Math = Math;
        this.audio.src = "../../../assets/sounds/new_order.mp3";
        this.audio.load();
        this.getCompletedMarkers();
    };
    PendingComponent.prototype.ngOnDestroy = function () {
        this.orderCall.unsubscribe();
    };
    PendingComponent.prototype.getOrders = function () {
        var _this = this;
        if (this.inFlight) {
            //dont do anything otherwise we will send multiple requests at once;
        }
        else {
            this.inFlight = true;
            this.orderService.getPending()
                .subscribe(function (data) {
                _this.inFlight = false;
                _this.loading = false;
                _this.orders = data.orders;
                var hasNewOrder = false;
                var newCompletedMarkers = {};
                for (var i = 0; i < _this.orders.length; i++) {
                    _this.highlighted[i] = { left: [], right: [] };
                    if (!_this.completedMarkers[_this.orders[i]._id]) {
                        _this.completedMarkers[_this.orders[i]._id] = {};
                    }
                    newCompletedMarkers[_this.orders[i]._id] = _this.completedMarkers[_this.orders[i]._id];
                    //need to look at createdAt time to check if it is after the last call time;
                    var orderCreatedAt = __WEBPACK_IMPORTED_MODULE_4_moment__(_this.orders[i].createdAt);
                    if (orderCreatedAt.isAfter(_this.lastCallTime)) {
                        hasNewOrder = true;
                    }
                }
                //removing any completed marker entries that no longer exist.
                _this.completedMarkers = newCompletedMarkers;
                if (hasNewOrder) {
                    console.log('new orders to display');
                    _this.audio.play();
                }
                __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].interval(1000).subscribe(function (x) {
                    _this.now = __WEBPACK_IMPORTED_MODULE_4_moment__(new Date());
                });
                _this.lastCallTime = __WEBPACK_IMPORTED_MODULE_4_moment__(new Date());
            }, function (error) {
                _this.inFlight = false;
                _this.loading = false;
                _this.errorHandler.show(error);
                console.log(error);
            });
        }
    };
    PendingComponent.prototype.updateStatus = function (index, newStatus) {
        var _this = this;
        this.orders[index].status = newStatus;
        var order = {};
        order._id = this.orders[index]._id;
        order.status = newStatus;
        this.orderService.put(order)
            .subscribe(function (data) {
        }, function (error) {
            _this.getOrders();
        });
    };
    PendingComponent.prototype.cancelOrder = function (index) {
        var _this = this;
        this.orderService.cancel(this.orders[index]._id)
            .subscribe(function () {
            _this.orders.splice(index, 1);
            delete _this.completedMarkers[_this.orders[index]._id];
        }, function (error) {
            _this.getOrders();
        });
    };
    PendingComponent.prototype.complete = function (index) {
        var _this = this;
        this.orderService.complete(this.orders[index])
            .subscribe(function (data) {
            _this.orders[index].status = "COMPLETE";
            setTimeout(function () {
                delete _this.completedMarkers[_this.orders[index]._id];
                _this.orders.splice(index, 1);
            }, 2000);
        }, function (error) {
            _this.getOrders();
        });
    };
    PendingComponent.prototype.trackByFn = function (index, order) {
        return order._id;
    };
    PendingComponent.prototype.markComplete = function (order, index) {
        this.completedMarkers[order._id][index] = !this.completedMarkers[order._id][index];
        this.writeCompletedToDisk();
    };
    PendingComponent.prototype.writeCompletedToDisk = function () {
        localStorage.setItem('order_status', JSON.stringify(this.completedMarkers));
    };
    PendingComponent.prototype.getCompletedMarkers = function () {
        var retrieved = localStorage.getItem('order_status');
        if (retrieved && typeof retrieved == "string") {
            retrieved = JSON.parse(retrieved);
            this.completedMarkers = retrieved;
        }
    };
    return PendingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PendingComponent.prototype, "checkScroll", null);
PendingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/orders/children/pending.template.html"),
        styles: [__webpack_require__("../../../../../src/app/orders/orders.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["a" /* trigger */])('anim', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["b" /* transition */])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["c" /* style */])({ height: '*', opacity: '1', transform: 'translateX(0)', 'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.3)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* sequence */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["d" /* animate */])(".25s ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["c" /* style */])({ height: '*', opacity: '.2', transform: 'translateX(20px)', 'box-shadow': 'none' })),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["d" /* animate */])(".1s ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["c" /* style */])({ height: '0', opacity: 0, transform: 'translateX(20px)', 'box-shadow': 'none' }))
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["b" /* transition */])('void => active', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["c" /* style */])({ height: '0', opacity: '0', transform: 'translateX(20px)', 'box-shadow': 'none' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* sequence */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["d" /* animate */])(".1s ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["c" /* style */])({ height: '*', opacity: '.2', transform: 'translateX(20px)', 'box-shadow': 'none' })),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["d" /* animate */])(".35s ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["c" /* style */])({ height: '*', opacity: 1, transform: 'translateX(0)', 'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.3)' }))
                    ])
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_index__["l" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_index__["l" /* OrderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_index__["e" /* ErrorHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_index__["e" /* ErrorHandler */]) === "function" && _e || Object])
], PendingComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=pending.component.js.map

/***/ }),

/***/ "../../../../../src/app/orders/children/pending.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container order-container\">\n  <div class=\"row order-title\">\n      <h3>{{'ORDERS.ORDERS' | translate}}</h3>\n  </div>\n  <div class=\"row\" *ngIf=\"loading\">\n    <div class=\"row center-spinner\"><mat-spinner></mat-spinner></div>\n  </div>\n  <div class=\"row justify-content-center\" *ngIf=\"!loading\">\n    <button type=\"button\" class=\"btn btn-primary half-width rounded\" (click)=\"getOrders()\">{{'GENERAL.REFRESH' | translate}}</button>\n  </div>\n  <div class=\"row\" *ngIf=\"!loading\">\n    <div class=\"container\">\n      <div class=\"row full-height\">\n        <div class=\"col-lg-12 col-mat-12 col-sm-12 col-xs-12 auto-height order\" *ngFor=\"let order of orders; let o = index; trackBy: trackByFn\" [@anim]=\"order.state\">\n          <div class=\"order-inner\">\n            <div class=\"col-12\">\n              <div class=\"display-inline-block\">\n                <h6>{{order.table.name}}</h6>\n              </div>\n              <div class=\"display-inline-block float-right\">\n                <h6 class=\"display-inline-block\">{{order.createdAt | duration:now}}</h6>\n                <div class=\"dropdown display-inline-block\">\n                  <button class=\"btn btn-sm btn-outline-primary btn-no-outline btn-no-focus btn-no-active btn-no-hover\" type=\"button\" id=\"orderActions\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"arrow down no-top-margin\"></i>\n                  </button>\n                  <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"orderActions\">\n                    <a class=\"dropdown-item\" href=\"javascript:null;\" (click)=\"cancelOrder(o)\">{{'ORDERS.CANCEL' | translate}}</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12\">\n              <div class=\"row\">\n                <div class=\"col-lg-6 col-mat-6 col-sm-12 col-xs-12\">\n                  <mat-list class=\"full-width\">\n                    <mat-list-item class=\"full-width\" *ngFor=\"let product of order.products.slice(0,Math.ceil(order.products.length/2)); let p = index\" (click)=\"markComplete(order, p)\"> <mat-icon matListIcon>{{!completedMarkers[order._id][p]?'label_outline':'label'}}</mat-icon>{{product.name}}</mat-list-item>\n                  </mat-list>\n                </div>\n                <div class=\"col-lg-6 col-mat-6 col-sm-12 col-xs-12\">\n                  <mat-list>\n                    <mat-list-item *ngFor=\"let product of order.products.slice(Math.ceil(order.products.length/2)); let p = index;\" (click)=\"markComplete(order, p + Math.ceil(order.products.length/2))\"><mat-icon matListIcon>{{!completedMarkers[order._id][p + Math.ceil(order.products.length/2)]?'label_outline':'label'}}</mat-icon>{{product.name}}</mat-list-item>\n                  </mat-list>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"status align-contents-center\">\n              <div class=\"btn-group full-width\" data-toggle=\"buttons\">\n                <label class=\"btn btn-outline-primary btn-no-focus btn-no-active third-width\" [ngClass]=\"{'active':order.status=='PENDING'}\" (click)=\"updateStatus(o, 'PENDING')\">\n                  <input type=\"radio\" name=\"status\" id=\"pending\" autocomplete=\"off\" [checked]=\"order.status == 'PENDING'\">{{'ORDERS.PENDING' | translate}}\n                </label>\n                <label class=\"btn btn-outline-primary btn-no-focus btn-no-active third-width\" [ngClass]=\"{'active':order.status=='IN_PROGRESS'}\" (click)=\"updateStatus(o, 'IN_PROGRESS')\">\n                  <input type=\"radio\" name=\"status\" id=\"in_progess\" autocomplete=\"off\" [checked]=\"order.status == 'IN_PROGRESS'\">{{'ORDERS.IN_PROGRESS' | translate}}\n                </label>\n                <label class=\"btn btn-outline-primary btn-no-focus btn-no-active third-width\" [ngClass]=\"{'active':order.status=='COMPLETE'}\" (click)=\"complete(o)\">\n                  <input type=\"radio\" name=\"status\" id=\"complete\" autocomplete=\"off\" [checked]=\"order.status == 'COMPLETE'\">{{'ORDERS.COMPLETE' | translate}}\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n      <div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/orders/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__children_pending_component__ = __webpack_require__("../../../../../src/app/orders/children/pending.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__children_pending_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__children_complete_component__ = __webpack_require__("../../../../../src/app/orders/children/complete.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__children_complete_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders_component__ = __webpack_require__("../../../../../src/app/orders/orders.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__orders_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orders_module__ = __webpack_require__("../../../../../src/app/orders/orders.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__orders_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__orders_routes__ = __webpack_require__("../../../../../src/app/orders/orders.routes.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__orders_routes__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdersComponent = (function () {
    function OrdersComponent(route, router, orderService, dialog) {
        this.route = route;
        this.router = router;
        this.orderService = orderService;
        this.dialog = dialog;
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/orders/orders.template.html"),
        styles: [__webpack_require__("../../../../../src/app/orders/orders.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["l" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["l" /* OrderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDialog */]) === "function" && _d || Object])
], OrdersComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/orders/orders.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_truncate__ = __webpack_require__("../../../../ng2-truncate/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__index__ = __webpack_require__("../../../../../src/app/orders/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_index__ = __webpack_require__("../../../../../src/app/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var OrdersModule = (function () {
    function OrdersModule() {
    }
    return OrdersModule;
}());
OrdersModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__index__["b" /* OrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_12__index__["c" /* PendingComponent */],
            __WEBPACK_IMPORTED_MODULE_12__index__["d" /* CompleteComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_14__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_9_ng2_truncate__["a" /* TruncateModule */],
            __WEBPACK_IMPORTED_MODULE_13__pipes_index__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_10_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["a" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["o" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["p" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["f" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["r" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["s" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["q" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["t" /* MatListModule */]
        ],
        providers: [],
        entryComponents: []
    })
], OrdersModule);

//# sourceMappingURL=orders.module.js.map

/***/ }),

/***/ "../../../../../src/app/orders/orders.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("../../../../../src/app/orders/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_index__ = __webpack_require__("../../../../../src/app/guards/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderRoutes; });


var OrderRoutes = [
    { path: 'orders',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* OrdersComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["a" /* AuthGuard */]],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'pending' },
            { path: 'pending', component: __WEBPACK_IMPORTED_MODULE_0__index__["c" /* PendingComponent */] },
            { path: 'complete', component: __WEBPACK_IMPORTED_MODULE_0__index__["d" /* CompleteComponent */] }
        ]
    }
];
//# sourceMappingURL=orders.routes.js.map

/***/ }),

/***/ "../../../../../src/app/orders/orders.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".order {\n  padding: 7.5px;\n  border-bottom: 1px solid #e3ecf9; }\n\n.order-container {\n  padding-right: 0px;\n  padding-left: 0px; }\n\n.order-title {\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.order:first-child {\n  border-top: 1px solid #e3ecf9; }\n\n.row {\n  margin-top: 10px; }\n\n.order:hover {\n  background: #dfe9f8; }\n\n.order-inner {\n  padding: 5px; }\n  .order-inner .status {\n    width: 100%; }\n    .order-inner .status .btn-group .btn {\n      font-size: 0.9rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/orders/orders.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row full-height\">\n    <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12 display-block auto-height\">\n      <!-- User Header-->\n      <div class=\"col-12\">\n\n      </div>\n      <!--Settings List-->\n      <div class=\"col-12 btn-group-vertical side-list\">\n        <a [routerLink]=\"['/orders/pending']\" class=\"btn btn-outline-secondary\" role=\"button\" aria-pressed=\"true\">{{'ORDERS.PENDING' | translate}} <i class=\"arrow right\"></i></a>\n        <a [routerLink]=\"['/orders/complete']\" class=\"btn btn-outline-secondary\" role=\"button\" aria-pressed=\"true\">{{'ORDERS.COMPLETE' | translate}} <i class=\"arrow right\"></i></a>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-md-9 col-sm-12 col-xs-12 display-block auto-height bg-white\">\n      <router-outlet></router-outlet>\n    </div>\n  <div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/payments/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__payments_component__ = __webpack_require__("../../../../../src/app/payments/payments.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__payments_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__payments_module__ = __webpack_require__("../../../../../src/app/payments/payments.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__payments_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/payments/payments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentsComponent = (function () {
    function PaymentsComponent(route, router, userService, dialog, paymentsService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.dialog = dialog;
        this.paymentsService = paymentsService;
        this.tables = [];
        this.clientId = "ca_BNy5AOnoJYsR3lfXeO6mmIqVMIy4D469";
        this.connected = false;
        this.account = {};
        this.loading = true;
    }
    PaymentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.params = this.route.queryParams.subscribe(function (params) {
            if (typeof params['code'] != 'undefined') {
                if (typeof params['error'] != 'undefined') {
                    //something went wrong when the user was connecting their stripe account
                    console.log(params['error_description']);
                }
                else {
                    //no error, was this a redirect from stripe or was it a simple navigation from within our app?
                    if (typeof params['code'] != 'undefined' && typeof params['state'] != 'undefined') {
                        //this was a redirect
                        _this.connected = true;
                        if (_this.paymentsService.verifyState(params['state'])) {
                            //state checks out so continue to load
                            _this.paymentsService.passAccessToken(params['code'])
                                .subscribe(function (data) {
                                alert(data);
                                _this.loading = false;
                            }, function (error) {
                                alert(error);
                                _this.loading = false;
                            });
                        }
                        else {
                            alert('states did not match, potential CSRF attack');
                        }
                    }
                }
            }
            else {
                //no code in browser so test if user has account connected
                _this.paymentsService.getAccount()
                    .subscribe(function (data) {
                    _this.loading = false;
                    _this.connected = true;
                    _this.account = data;
                    console.log('user has account connected');
                }, function (error) {
                    _this.loading = false;
                    console.log(error);
                });
            }
        });
    };
    PaymentsComponent.prototype.ngOnDestroy = function () {
        this.params.unsubscribe();
    };
    PaymentsComponent.prototype.initialiseConnect = function () {
        this.paymentsService.initialiseConnection();
    };
    return PaymentsComponent;
}());
PaymentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/payments/payments.template.html"),
        styles: [__webpack_require__("../../../../../src/app/payments/payments.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["f" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["m" /* PaymentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["m" /* PaymentsService */]) === "function" && _e || Object])
], PaymentsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=payments.component.js.map

/***/ }),

/***/ "../../../../../src/app/payments/payments.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index__ = __webpack_require__("../../../../../src/app/payments/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var PaymentsModule = (function () {
    function PaymentsModule() {
    }
    return PaymentsModule;
}());
PaymentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__index__["b" /* PaymentsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["o" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatProgressSpinnerModule */]
        ],
        providers: [],
        entryComponents: []
    })
], PaymentsModule);

//# sourceMappingURL=payments.module.js.map

/***/ }),

/***/ "../../../../../src/app/payments/payments.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "td.danger {\n  font-weight: bold;\n  color: red; }\n\ntd.good {\n  color: green;\n  font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/payments/payments.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <h3>{{'PAYMENTS.PAYMENTS' | translate}}</h3>\n  </div>\n  <div class=\"row justify-content-center\">\n    <span>{{'PAYMENTS.DESCRIPTION' | translate}}</span>\n  </div>\n  <div class=\"row\" *ngIf=\"loading\">\n    <div class=\"row center-spinner\"><mat-spinner></mat-spinner></div>\n  </div>\n  <div class=\"row justify-content-center\" *ngIf=\"!loading\">\n    <button type=\"button\" class=\"btn btn-primary half-width rounded\" (click)=\"initialiseConnect()\" *ngIf=\"!connected\">{{'PAYMENTS.CONNECT_ACCOUNT' | translate}}</button>\n    <table class=\"table\" *ngIf=\"connected\">\n      <tr>\n        <td>Account connected</td>\n        <td *ngIf=\"connected\" class=\"good\"><mat-icon matTooltip=\"\" matTooltipPosition=\"above\" class=\"\">done</mat-icon></td>\n        <td *ngIf=\"!connected\" class=\"danger\"><mat-icon matTooltip=\"\" matTooltipPosition=\"above\" class=\"\">clear</mat-icon></td>\n      </tr>\n      <tr>\n        <td>Stripe Account</td>\n        <td>{{account.displayName}}</td>\n      </tr>\n      <tr>\n        <td>Currency</td>\n        <td>{{account.currency | uppercase}}</td>\n      </tr>\n      <tr>\n        <td>Details Submitted to Stripe</td>\n        <td [ngClass]=\"{'danger':!account.detailsSubmitted, 'good':account.detailsSubmitted}\">{{account.detailsSubmitted ? 'Yes':'No'}}</td>\n      </tr>\n      <tr>\n        <td>Charges Enabled</td>\n        <td [ngClass]=\"{'danger':!account.chargesEnabled, 'good':account.chargesEnabled}\">{{account.chargesEnabled ? 'Yes':'No'}}</td>\n      </tr>\n      <tr>\n        <td>Payouts Scheduled</td>\n        <td [ngClass]=\"{'danger':!account.payoutsEnabled, 'good':account.payoutsEnabled}\">{{account.payoutsEnabled ? 'Yes':'No'}}</td>\n      </tr>\n      <tr>\n        <td colspan=\"3\"><a href=\"https://dashboard.stripe.com\">{{'PAYMENTS.GO_TO_STRIPE' | translate}}</a></td>\n      </tr>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pipes/duration.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DurationPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DurationPipe = (function () {
    function DurationPipe() {
    }
    DurationPipe.prototype.transform = function (value, test) {
        var now = __WEBPACK_IMPORTED_MODULE_1_moment__(new Date());
        var end = __WEBPACK_IMPORTED_MODULE_1_moment__(value);
        var dif = __WEBPACK_IMPORTED_MODULE_1_moment__["duration"](now.diff(end));
        var toReturn = [];
        if (("00" + dif.hours()).slice(-2) != "00") {
            toReturn[toReturn.length] = ("00" + dif.hours()).slice(-2);
        }
        toReturn[toReturn.length] = ("00" + dif.minutes()).slice(-2);
        toReturn[toReturn.length] = ("00" + dif.seconds()).slice(-2);
        return toReturn.join(':');
    };
    return DurationPipe;
}());
DurationPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'duration' })
], DurationPipe);

//# sourceMappingURL=duration.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_pipe__ = __webpack_require__("../../../../../src/app/pipes/product.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__product_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__name_pipe__ = __webpack_require__("../../../../../src/app/pipes/name.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__name_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__duration_pipe__ = __webpack_require__("../../../../../src/app/pipes/duration.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__duration_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_module__ = __webpack_require__("../../../../../src/app/pipes/pipes.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__pipes_module__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameFilter; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NameFilter = (function () {
    function NameFilter() {
    }
    NameFilter.prototype.transform = function (items, filter) {
        if (typeof items == 'undefined' || typeof filter == 'undefined' || filter === "" || filter.replace(/^\s+|\s+$/g, '').length == 0) {
            return items;
        }
        filter = filter.replace(/^\s+|\s+$/g, '');
        var matches = items.filter(function (item) { return (item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1); });
        if (matches.length == 0) {
            return [-1];
        }
        return matches;
    };
    return NameFilter;
}());
NameFilter = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'nameFilter'
    })
], NameFilter);

//# sourceMappingURL=name.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/pipes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("../../../../../src/app/pipes/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__index__["b" /* ProductMatchesFilter */],
            __WEBPACK_IMPORTED_MODULE_1__index__["c" /* NameFilter */],
            __WEBPACK_IMPORTED_MODULE_1__index__["d" /* DurationPipe */]
        ],
        imports: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__index__["c" /* NameFilter */],
            __WEBPACK_IMPORTED_MODULE_1__index__["b" /* ProductMatchesFilter */],
            __WEBPACK_IMPORTED_MODULE_1__index__["d" /* DurationPipe */]
        ]
    })
], PipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/product.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductMatchesFilter; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductMatchesFilter = (function () {
    function ProductMatchesFilter() {
    }
    ProductMatchesFilter.prototype.transform = function (items, filter) {
        if (typeof items == 'undefined' || typeof filter == 'undefined' || filter === "" || filter.replace(/^\s+|\s+$/g, '').length == 0) {
            return items;
        }
        filter = filter.replace(/^\s+|\s+$/g, '');
        var matches = items.filter(function (item) { return (item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1) || (item.description.toLowerCase().indexOf(filter.toLowerCase()) !== -1); });
        if (matches.length == 0) {
            return [-1];
        }
        return matches;
    };
    return ProductMatchesFilter;
}());
ProductMatchesFilter = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'productFilter'
    })
], ProductMatchesFilter);

//# sourceMappingURL=product.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/products/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__products_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__products_component__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_module__ = __webpack_require__("../../../../../src/app/products/products.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__products_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/products/modals/add.modal.html":
/***/ (function(module, exports) {

module.exports = "<h3 mat-dialog-title>{{'PRODUCTS.ADD_PRODUCT' | translate}}</h3>\n<div mat-dialog-content>\n  <div class=\"full-width\">\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Name\" type=\"text\" #name=\"ngModel\" [(ngModel)]=\"model.name\" required maxlength=\"100\">\n    </mat-form-field>\n  </div>\n  <div class=\"full-width\">\n    <mat-form-field class=\"full-width\">\n        <textarea matInput placeholder=\"Description\"[(ngModel)]=\"model.description\" #description=\"ngModel\" maxlength=\"250\"></textarea>\n        <mat-hint align=\"end\">{{description.value?.length || 0}}/250</mat-hint>\n    </mat-form-field>\n  </div>\n  <div class=\"half-width\">\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Price\" #price type=\"number\" step=\"0.01\" min=\"0\" [(ngModel)]=\"model.price\" value=\"0\" (change)=\"checkPrice()\" required>\n      <span matPrefix>£&nbsp;</span>\n    </mat-form-field>\n  </div>\n</div>\n<div mat-dialog-actions class=\"text-align-right\">\n    <button mat-button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">{{'GENERAL.CANCEL' | translate}}</button>\n    <button mat-raised-button color=\"primary\" [hidden]=\"update\" type=\"button\" class=\"btn btn-default\" [disabled]=\"name.invalid || description.invalid\" (click)=\"submit()\">{{'GENERAL.ADD' | translate}}</button>\n    <button mat-raised-button color=\"primary\" [hidden]=\"!update\" type=\"button\" class=\"btn btn-default\" [disabled]=\"name.invalid || description.invalid\" (click)=\"submit()\">{{'GENERAL.SAVE' | translate}}</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__misc_index__ = __webpack_require__("../../../../../src/app/misc/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_index__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddProductDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ProductsComponent = (function () {
    function ProductsComponent(route, router, productService, dialog) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.dialog = dialog;
        this.loading = true;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getAll()
            .subscribe(function (data) {
            _this.loading = false;
            _this.products = data.products;
        }, function (error) {
            _this.loading = false;
            alert(error);
        });
    };
    ProductsComponent.prototype.openAddDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddProductDialog, {
            width: '30%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (typeof result != 'undefined') {
                if (typeof result != 'undefined') {
                    var newProduct_1 = new __WEBPACK_IMPORTED_MODULE_6__models_index__["a" /* Product */]();
                    newProduct_1.name = result.name;
                    newProduct_1.price = +result.price;
                    newProduct_1.description = result.description;
                    _this.productService.create(newProduct_1)
                        .subscribe(function (data) {
                        newProduct_1._id = data._id;
                        _this.products = [newProduct_1].concat(_this.products);
                    }, function (error) {
                        alert(error);
                    });
                }
            }
        });
    };
    ProductsComponent.prototype.openEditDialog = function (index) {
        var _this = this;
        var dialogRef = this.dialog.open(AddProductDialog, {
            width: '30%',
            data: {
                product: this.products[index]
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (typeof result != undefined) {
                _this.productService.put(result)
                    .subscribe(function (data) {
                    _this.products[index] = result;
                }, function (error) {
                    alert(error);
                });
            }
        });
    };
    ProductsComponent.prototype.deleteConfirmation = function (index) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__misc_index__["b" /* ConfirmDeleteDialog */]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                //delete it
                _this.productService.delete(_this.products[index]._id)
                    .subscribe(function (data) {
                    _this.products.splice(index, 1);
                }, function (error) {
                    alert(error);
                });
            }
            else {
                //keep it
            }
        });
    };
    ProductsComponent.prototype.toggleStockStatus = function (index) {
        var _this = this;
        this.products[index].in_stock = !this.products[index].in_stock;
        this.productService.put(this.products[index])
            .subscribe(function (data) {
        }, function (error) {
            _this.products[index].in_stock = !_this.products[index].in_stock;
            console.log(error);
        });
    };
    ProductsComponent.prototype.toggleAgeRestriction = function (index) {
        var _this = this;
        this.products[index].age_restricted = !this.products[index].age_restricted;
        this.productService.put(this.products[index])
            .subscribe(function (data) {
        }, function (error) {
            _this.products[index].age_restricted = !_this.products[index].age_restricted;
            console.log(error);
        });
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/products/products.template.html"),
        styles: [__webpack_require__("../../../../../src/app/products/products.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["k" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["k" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDialog */]) === "function" && _d || Object])
], ProductsComponent);

var AddProductDialog = (function () {
    function AddProductDialog(dialogRef, translate, data) {
        this.dialogRef = dialogRef;
        this.translate = translate;
        this.data = data;
        this.model = {};
        this.update = false;
        if (data && data.product) {
            this.update = true;
            this.model = data.product;
        }
        else {
            this.model.price = 0;
        }
    }
    AddProductDialog.prototype.checkPrice = function () {
        if (this.model.price < 0) {
            this.model.price = 0;
        }
    };
    AddProductDialog.prototype.close = function () {
        this.dialogRef.close(undefined);
    };
    AddProductDialog.prototype.submit = function () {
        this.dialogRef.close(this.model);
    };
    return AddProductDialog;
}());
AddProductDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-product-dialog',
        template: __webpack_require__("../../../../../src/app/products/modals/add.modal.html"),
        styles: [__webpack_require__("../../../../../src/app/products/products.scss")]
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialogRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _f || Object, Object])
], AddProductDialog);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/products.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_truncate__ = __webpack_require__("../../../../ng2-truncate/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__index__ = __webpack_require__("../../../../../src/app/products/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_index__ = __webpack_require__("../../../../../src/app/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var ProductsModule = (function () {
    function ProductsModule() {
    }
    return ProductsModule;
}());
ProductsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__index__["b" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__index__["c" /* AddProductDialog */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_8_ng2_truncate__["a" /* TruncateModule */],
            __WEBPACK_IMPORTED_MODULE_11__pipes_index__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["o" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["p" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["q" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatButtonModule */]
        ],
        providers: [],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_10__index__["c" /* AddProductDialog */]]
    })
], ProductsModule);

//# sourceMappingURL=products.module.js.map

/***/ }),

/***/ "../../../../../src/app/products/products.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\n  margin-top: 10px; }\n\n.mat-icon.side-by-side {\n  display: table-cell; }\n\n.full-width {\n  width: 100%; }\n\n.half-width {\n  width: 50%; }\n\n.text-align-right {\n  text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <h3>{{'PRODUCTS.PRODUCTS' | translate}}</h3>\n  </div>\n  <div class=\"row\">\n    {{'PRODUCTS.DESCRIPTION' | translate}}\n  </div>\n  <div class=\"row\" *ngIf=\"loading\">\n    <div class=\"row center-spinner\"><mat-spinner></mat-spinner></div>\n  </div>\n  <div class=\"row justify-content-center\" *ngIf=\"!loading\">\n    <button type=\"button\" class=\"btn btn-primary half-width rounded\" (click)=\"openAddDialog()\">{{'GENERAL.ADD' | translate}}</button>\n  </div>\n  <div class=\"row\" *ngIf=\"!loading\">\n    <table class=\"table\">\n      <tr>\n        <td colspan=\"5\"><input placeholder=\"Filter\" type=\"text\" [(ngModel)]=\"searchCriteria\" class=\"float-right\"></td>\n      </tr>\n      <tr *ngFor=\"let product of products | productFilter:searchCriteria; let i = index;\">\n        <ng-container *ngIf=\"product !== -1\">\n          <td class=\"col-3\">{{product.name}}</td>\n          <td class=\"col-4\">{{product.description | truncate}}</td>\n          <td class=\"col-1\">{{product.price | currency:'GBP':true}}</td>\n          <td class=\"col-1\" *ngIf=\"product.in_stock\">\n            <mat-icon matTooltip=\"{{'PRODUCTS.IN_STOCK' | translate}}\" (click)=\"toggleStockStatus(i)\" matTooltipPosition=\"above\" class=\"side-by-side cursor-pointer\">done</mat-icon>\n          </td>\n          <td class=\"col-1\" *ngIf=\"!product.in_stock\">\n            <mat-icon matTooltip=\"{{'PRODUCTS.OUT_OF_STOCK' | translate}}\" (click)=\"toggleStockStatus(i)\" matTooltipPosition=\"above\" class=\"side-by-side cursor-pointer\">clear</mat-icon>\n          </td>\n          <td class=\"col-1\" *ngIf=\"product.age_restricted\">\n            <mat-icon matTooltip=\"{{'PRODUCTS.AGE_RESTRICTED' | translate}}\" (click)=\"toggleAgeRestriction(i)\" matTooltipPosition=\"above\" class=\"side-by-side cursor-pointer\">done</mat-icon>\n          </td>\n          <td class=\"col-1\" *ngIf=\"!product.age_restricted\">\n            <mat-icon matTooltip=\"{{'PRODUCTS.NOT_AGE_RESTRICTED' | translate}}\" (click)=\"toggleAgeRestriction(i)\" matTooltipPosition=\"above\" class=\"side-by-side cursor-pointer\">clear</mat-icon>\n          </td>\n          <td class=\"col-1\">\n            <mat-icon matTooltip=\"{{'GENERAL.EDIT' | translate}}\" matTooltipPosition=\"above\" class=\"side-by-side\" (click)=\"openEditDialog(i)\">edit</mat-icon>\n            <mat-icon matTooltip=\"{{'GENERAL.DELETE' | translate}}\" matTooltipPosition=\"above\" class=\"side-by-side\" (click)=\"deleteConfirmation(i)\">delete_forever</mat-icon>\n          </td>\n        </ng-container>\n        <td class=\"align-center\" colspan=\"4\" *ngIf=\"product == -1\">{{'SEARCH.NO_MATCHES' | translate}}</td>\n      </tr>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/recover/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recover_component__ = __webpack_require__("../../../../../src/app/recover/recover.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__recover_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reset_component__ = __webpack_require__("../../../../../src/app/recover/reset.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__reset_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recover_routes__ = __webpack_require__("../../../../../src/app/recover/recover.routes.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__recover_routes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recover_module__ = __webpack_require__("../../../../../src/app/recover/recover.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__recover_module__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/recover/recover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecoverComponent = (function () {
    function RecoverComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.recoveryEmailSent = false;
    }
    RecoverComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    RecoverComponent.prototype.recover = function () {
        var _this = this;
        this.loading = true;
        this.userService.requestRecovery(this.email.value)
            .subscribe(function (data) {
            _this.recoveryEmailSent = true;
            _this.loading = false;
        }, function (error) {
            console.log(error);
        });
    };
    return RecoverComponent;
}());
RecoverComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/recover/recover.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["f" /* UserService */]) === "function" && _c || Object])
], RecoverComponent);

var _a, _b, _c;
//# sourceMappingURL=recover.component.js.map

/***/ }),

/***/ "../../../../../src/app/recover/recover.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__index__ = __webpack_require__("../../../../../src/app/recover/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var RecoverModule = (function () {
    function RecoverModule() {
    }
    return RecoverModule;
}());
RecoverModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__index__["b" /* RecoverComponent */],
            __WEBPACK_IMPORTED_MODULE_10__index__["c" /* ResetComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4_ng2_validation__["CustomFormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["p" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["o" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["q" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatButtonModule */]
        ],
        providers: []
    })
], RecoverModule);

//# sourceMappingURL=recover.module.js.map

/***/ }),

/***/ "../../../../../src/app/recover/recover.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("../../../../../src/app/recover/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_index__ = __webpack_require__("../../../../../src/app/guards/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverRoutes; });


var RecoverRoutes = [
    { path: 'recover', component: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* RecoverComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["c" /* NotAuthGuard */]] },
    { path: 'recover/:guid', component: __WEBPACK_IMPORTED_MODULE_0__index__["c" /* ResetComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["c" /* NotAuthGuard */]] }
];
//# sourceMappingURL=recover.routes.js.map

/***/ }),

/***/ "../../../../../src/app/recover/recover.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12\" *ngIf=\"!recoveryEmailSent\">\n      <h2>{{'RECOVER.RECOVER' | translate}}</h2>\n      <span>{{'RECOVER.DESCRIPTION' | translate}}</span>\n        <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && recover()\" novalidate>\n          <mat-form-field class=\"full-width\" floatPlaceholder=\"never\">\n            <input matInput placeholder=\"{{'RECOVER.EMAIL_USERNAME' | translate}}\" [formControl]=\"email\" required>\n            <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n          </mat-form-field>\n          <button mat-raised-button [disabled]=\"loading || email.invalid\" class=\"btn btn-primary float-right\">{{'RECOVER.SUBMIT' | translate}}</button>\n      </form>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12\" *ngIf=\"recoveryEmailSent\">\n      <h2>{{'RECOVER.RECOVER' | translate}}</h2>\n      <span>{{'RECOVER.SENT' | translate}}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/recover/reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetComponent = (function () {
    function ResetComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.guid = "";
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(/\d+/)]);
        this.confirmation = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].equalTo(this.password)]);
        this.recoveryEmailSent = false;
    }
    ResetComponent.prototype.getPasswordErrorMessage = function () {
        return this.password.hasError('required') ? 'You must enter a new password' :
            this.password.hasError('pattern') ? 'Your new password must contain atleast one number (0 - 9)' :
                !this.password.hasError('minLength') ? 'Your new password must be at least 8 characters long' : 'Your new password must be atleast 8 characters long and contain atleast one number (0 - 9)';
    };
    ResetComponent.prototype.getConfirmationErrorMessage = function () {
        return this.confirmation.hasError('required') ? 'You must confirm your new password' :
            this.confirmation.hasError('equalTo') ? 'Passwords do not match' : '';
    };
    ResetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.guid = params['guid'];
        });
    };
    ResetComponent.prototype.reset = function () {
        var _this = this;
        this.loading = true;
        this.userService.resetPassword(this.guid, this.password.value)
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (error) {
            console.log(error);
        });
    };
    ResetComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ResetComponent;
}());
ResetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/recover/reset.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["f" /* UserService */]) === "function" && _c || Object])
], ResetComponent);

var _a, _b, _c;
//# sourceMappingURL=reset.component.js.map

/***/ }),

/***/ "../../../../../src/app/recover/reset.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12\" *ngIf=\"!recoveryEmailSent\">\n      <h2>{{'RECOVER.RESET_PASSWORD' | translate}}</h2>\n      <span>{{'RECOVER.RESET_DESCRIPTION' | translate}}</span>\n        <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && reset()\" novalidate>\n          <mat-form-field class=\"full-width\" floatPlaceholder=\"never\">\n            <input matInput placeholder=\"{{'RECOVER.PASSWORD' | translate}}\" [formControl]=\"password\" required type=\"password\">\n            <mat-error *ngIf=\"confirmation.invalid\">{{getPasswordErrorMessage()}}</mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"full-width\" floatPlaceholder=\"never\">\n            <input matInput placeholder=\"{{'RECOVER.PASSWORD_CONFIRMATION' | translate}}\" [formControl]=\"confirmation\" required type=\"password\">\n            <mat-error *ngIf=\"confirmation.invalid\">{{getConfirmationErrorMessage()}}</mat-error>\n          </mat-form-field>\n          <button mat-raised-button [disabled]=\"loading || password.invalid || confirmation.invalid\" class=\"btn btn-primary float-right\">{{'RECOVER.SUBMIT' | translate}}</button>\n      </form>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12\" *ngIf=\"recoveryEmailSent\">\n      <h2>{{'RECOVER.RECOVER' | translate}}</h2>\n      <span>{{'RECOVER.SENT' | translate}}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/register/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__register_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_routes__ = __webpack_require__("../../../../../src/app/register/register.routes.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__register_routes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_module__ = __webpack_require__("../../../../../src/app/register/register.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__register_module__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(route, router, userService, premisesService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.premisesService = premisesService;
        this.model = {};
        this.loading = false;
        this.validUsername = true;
        this.usernameCheckInFlight = false;
        this.usernameUpdated = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        var subscription = this.usernameUpdated
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe(function (value) {
            _this.userService.checkUsername(value)
                .subscribe(function (data) {
                _this.usernameCheckInFlight = false;
                _this.validUsername = !data.taken;
            }, function (error) {
                _this.usernameCheckInFlight = false;
                console.log(error);
            });
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.userService.register(this.model)
            .subscribe(function (data) {
            _this.router.navigate(['/setup']);
        }, function (error) {
            alert(error);
        });
    };
    RegisterComponent.prototype.checkUsername = function () {
        this.usernameCheckInFlight = true;
        this.usernameUpdated.next(this.model.username);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/register/register.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* PremisesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* PremisesService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_truncate__ = __webpack_require__("../../../../ng2-truncate/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_index__ = __webpack_require__("../../../../../src/app/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__index__ = __webpack_require__("../../../../../src/app/register/index.ts");
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var RegisterModule = (function () {
    function RegisterModule() {
    }
    return RegisterModule;
}());
RegisterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__index__["b" /* RegisterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_8_ng2_truncate__["a" /* TruncateModule */],
            __WEBPACK_IMPORTED_MODULE_10__pipes_index__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["o" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["p" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["q" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MatFormFieldModule */]
        ],
        providers: [],
        entryComponents: []
    })
], RegisterModule);

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_index__ = __webpack_require__("../../../../../src/app/guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("../../../../../src/app/register/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterRoutes; });


var RegisterRoutes = [
    { path: 'register',
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_index__["b" /* IsLoggedInGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_1__index__["b" /* RegisterComponent */] }
];
//# sourceMappingURL=register.routes.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12\">\n      <h4>{{'REGISTER.TITLE' | translate}}</h4>\n        <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && register()\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{'has-error':f.submitted && !username.valid }\">\n          <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required placeholder=\"{{'REGISTER.USERNAME' | translate}}\" (keyup)=\"checkUsername()\"/>\n          <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">{{'USERNAME_IS_REQUIRED' | translate}}</div>\n          <div *ngIf=\"!validUsername\" class=\"help-block\">{{'REGISTER.USERNAME_TAKEN' | translate}}</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error':f.submitted && !email.valid }\">\n          <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required placeholder=\"{{'REGISTER.EMAIL' | translate}}\"/>\n          <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">{{'USERNAME_IS_REQUIRED' | translate}}</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required placeholder=\"{{'REGISTER.PASSWORD' | translate}}\" />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">{{'PASSWORD_IS_REQUIRED' | translate}}</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary full-width rounded\">{{'REGISTER.SIGN_UP' | translate}}</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        </div>\n        <div class=\"form-group\">\n          By signing up, you agree to the <a>Terms of Service</a> and <a>Privacy Policy</a>, including <a>Cookie Use</a>.\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(this.baseUrl + '/users/login', { username: username, password: password }, this.headers())
            .map(function (response) {
            var token = response.json();
            if (token && token.token) {
                localStorage.setItem('currentUser', JSON.stringify(token));
            }
            return token;
        });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        return false;
    };
    AuthenticationService.prototype.headers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Content-Type': 'application/json' });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/cache.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CacheService = (function () {
    function CacheService() {
        this.cache = {};
    }
    CacheService.prototype.put = function (_id, object) {
        this.cache[_id] = object;
    };
    CacheService.prototype.get = function (_id) {
        return this.cache[_id];
    };
    return CacheService;
}());
CacheService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], CacheService);

//# sourceMappingURL=cache.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/error.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ErrorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ErrorHandler = (function () {
    function ErrorHandler(dialog) {
        this.dialog = dialog;
        this.cache = {};
    }
    ErrorHandler.prototype.show = function (error) {
        var dialogRef = this.dialog.open(ErrorDialog, {
            data: error._body
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (error && error.reload) {
                location.reload();
            }
        });
    };
    return ErrorHandler;
}());
ErrorHandler = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatDialog */]) === "function" && _a || Object])
], ErrorHandler);

var ErrorDialog = (function () {
    function ErrorDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        if (data) {
            this.error = data;
        }
    }
    return ErrorDialog;
}());
ErrorDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n      <h3 mat-dialog-title>{{'ERRORS.DIALOG_TITLE' | translate}}</h3>\n        <mat-dialog-content>\n          <span>{{'ERRORS.DIALOG_CONTENT' | translate}}</span>\n          <br><br>\n          <span style=\"font-style:italic\">{{error.message}}</span>\n        </mat-dialog-content>\n        <mat-dialog-actions class=\"float-right\">\n          <button mat-raised-button type='button' class='' (click)='dialogRef.close()'>Ok</button>\n        </mat-dialog-actions>\n"
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialogRef */]) === "function" && _b || Object, Object])
], ErrorDialog);

var _a, _b;
//# sourceMappingURL=error.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, defaultOptions, router, injector, errorHandler) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.router = router;
        _this.errorHandler = errorHandler;
        setTimeout(function () {
            _this.authenticationService = injector.get(__WEBPACK_IMPORTED_MODULE_6__index__["c" /* AuthenticationService */]);
            _this.loadHandler = injector.get(__WEBPACK_IMPORTED_MODULE_6__index__["d" /* LoadHandler */]);
        });
        return _this;
    }
    HttpService.prototype.request = function (url, options) {
        var _this = this;
        if (this.loadHandler) {
            this.loadHandler.start();
        }
        return _super.prototype.request.call(this, url, options).do(function (response) {
        }, function (error) {
            _this.onError(error);
        }).finally(function () {
            if (_this.loadHandler) {
                _this.loadHandler.finish();
            }
        }).catch(function (error, caught) {
            if (typeof error['_body'] == 'string') {
                try {
                    error['_body'] = JSON.parse(error['_body']);
                }
                catch (e) {
                }
            }
            if (error.status === 401 || error.status === 403) {
                _this.authenticationService.logout();
                _this.router.navigate(['/login']);
            }
            else if (error.status >= 500) {
                if (_this.errorHandler) {
                    _this.errorHandler.show(error);
                }
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.catchErrors = function () {
        var _this = this;
        return function (res) {
            if (typeof res['_body'] == "string") {
                res['_body'] = JSON.parse(res['_body']);
            }
            console.log(res['_body']);
            //handle authorization errors
            if (res.status === 401 || res.status === 403) {
                _this.authenticationService.logout();
                _this.router.navigate(['/login']);
            }
            else if (res.status >= 500) {
                _this.errorHandler.show(res['_body']);
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(res);
        };
    };
    HttpService.prototype.onError = function (error) {
        //do nothing I guess?
    };
    return HttpService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]));
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* XHRBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* XHRBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__index__["e" /* ErrorHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__index__["e" /* ErrorHandler */]) === "function" && _e || Object])
], HttpService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__http_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__premises_service__ = __webpack_require__("../../../../../src/app/services/premises.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__premises_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__table_service__ = __webpack_require__("../../../../../src/app/services/table.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__table_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_5__menu_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cache_service__ = __webpack_require__("../../../../../src/app/services/cache.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__cache_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_7__product_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_8__order_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__payments_service__ = __webpack_require__("../../../../../src/app/services/payments.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_9__payments_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__error_service__ = __webpack_require__("../../../../../src/app/services/error.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_10__error_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_10__error_service__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__loader_service__ = __webpack_require__("../../../../../src/app/services/loader.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_11__loader_service__["a"]; });












//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/services/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadHandler; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadHandler = (function () {
    function LoadHandler(snackBar) {
        this.snackBar = snackBar;
        this.cache = {};
    }
    LoadHandler.prototype.start = function () {
        this.snackBarRef = this.snackBar.open("Loading...");
    };
    LoadHandler.prototype.finish = function () {
        if (this.snackBarRef) {
            this.snackBarRef.dismiss();
        }
    };
    return LoadHandler;
}());
LoadHandler = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatSnackBar */]) === "function" && _a || Object])
], LoadHandler);

var _a;
//# sourceMappingURL=loader.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuService = (function () {
    function MenuService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/manage/menus";
        this.cache = {};
    }
    MenuService.prototype.getAll = function () {
        var _this = this;
        if (typeof this.cache.get == 'undefined') {
            return this.http.get(this.baseUrl, this.jwt())
                .map(function (response) {
                _this.cache.get = response.json();
                return response.json();
            });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.cache.get);
        }
    };
    MenuService.prototype.get = function (_id) {
        return this.http.get(this.baseUrl + '/' + _id, this.jwt())
            .map(function (response) {
            return response.json();
        });
    };
    MenuService.prototype.put = function (menu) {
        return this.http.put(this.baseUrl + '/' + menu._id, menu, this.jwt())
            .map(function (response) {
            return response.json();
        });
    };
    MenuService.prototype.putContents = function (menu) {
        return this.http.put(this.baseUrl + '/contents/' + menu._id, { contents: menu.contents }, this.jwt())
            .map(function (response) {
            return response.json();
        });
    };
    MenuService.prototype.create = function (menu) {
        var _this = this;
        return this.http.post(this.baseUrl, menu, this.jwt())
            .map(function (response) {
            _this.cache.get[_this.cache.get.length] = menu;
            return response.json();
        });
    };
    MenuService.prototype.delete = function (_id) {
        return this.http.delete(this.baseUrl + '/' + _id, this.jwt())
            .map(function (response) {
            if (response.status >= 200 && response.status <= 300) {
                return {};
            }
            return response.json();
        });
    };
    MenuService.prototype.makeActive = function (_id) {
        return this.http.post(this.baseUrl + '/active/' + _id, {}, this.jwt())
            .map(function (response) {
            return response.json();
        });
    };
    //private helper methods
    MenuService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    return MenuService;
}());
MenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MenuService);

var _a;
//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderService = (function () {
    function OrderService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/orders";
        this.cache = {};
    }
    OrderService.prototype.getPending = function () {
        console.log('calling');
        return this.http.get(this.baseUrl + '/pending', this.jwt())
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || 'Server error'); });
        ;
    };
    OrderService.prototype.getComplete = function () {
        return this.http.get(this.baseUrl + '/complete', this.jwt())
            .map(function (response) {
            return response.json();
        });
    };
    OrderService.prototype.getCompleteByDay = function (year, month, day) {
        return this.http.get(this.baseUrl + "/complete/" + year + "/" + month + "/" + day, this.jwt())
            .map(function (response) {
            return response.json();
        });
    };
    OrderService.prototype.getOrderBreakdown = function () {
        return this.http.get(this.baseUrl + '/complete/breakdown', this.jwt())
            .map(function (response) {
            return response.json();
        });
    };
    OrderService.prototype.get = function (_id) {
        return this.http.get(this.baseUrl + '/' + _id, this.jwt())
            .map(function (response) {
            return response.json();
        });
    };
    OrderService.prototype.put = function (order) {
        return this.http.put(this.baseUrl + '/' + order._id, order, this.jwt())
            .map(function (response) {
            return response.json();
        });
    };
    OrderService.prototype.complete = function (order) {
        return this.http.post(this.baseUrl + '/complete/' + order._id, {}, this.jwt())
            .map(function (response) {
            return response.json();
        });
    };
    OrderService.prototype.create = function (order) {
        var _this = this;
        return this.http.post(this.baseUrl, order, this.jwt())
            .map(function (response) {
            _this.cache.get[_this.cache.get.length] = order;
            return response.json();
        });
    };
    OrderService.prototype.delete = function (_id) {
        return this.http.delete(this.baseUrl + '/' + _id, this.jwt())
            .map(function (response) {
            if (response.status >= 200 && response.status <= 300) {
                return {};
            }
            return response.json();
        });
    };
    OrderService.prototype.cancel = function (_id) {
        return this.http.post(this.baseUrl + '/cancel/' + _id, {}, this.jwt())
            .map(function (response) {
            if (response.status >= 200 && response.status <= 300) {
                return {};
            }
            return response.json();
        });
    };
    //private helper methods
    OrderService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    return OrderService;
}());
OrderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], OrderService);

var _a;
//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/payments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentsService = (function () {
    function PaymentsService(http) {
        this.http = http;
        this.cache = {};
        this.stripeUrl = "https://connect.stripe.com/oauth/";
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "/manage/payments";
        this.clientId = "ca_BNy5AOnoJYsR3lfXeO6mmIqVMIy4D469";
    }
    PaymentsService.prototype.initialiseConnection = function () {
        var state = Math.random().toString(20);
        localStorage.setItem('state', state);
        var urlToNav = this.stripeUrl;
        urlToNav += "authorize";
        urlToNav += "?";
        urlToNav += "response_type=code";
        urlToNav += "&";
        urlToNav += "client_id=" + this.clientId;
        urlToNav += "&";
        urlToNav += "scope=read_write";
        urlToNav += "&";
        urlToNav += "state=" + state;
        window.location.href = urlToNav;
    };
    PaymentsService.prototype.verifyState = function (passedState) {
        var storedState = localStorage.getItem("state");
        if (storedState) {
            //exists
            return storedState == passedState;
        }
    };
    PaymentsService.prototype.passAccessToken = function (code) {
        return this.http.post(this.baseUrl + "/code", { code: code }, this.jwt())
            .map(function (response) {
            return response.json();
        });
    };
    PaymentsService.prototype.getAccount = function () {
        return this.http.get(this.baseUrl, this.jwt())
            .map(function (response) {
            return response.json();
        });
    };
    //private helper methods
    PaymentsService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    return PaymentsService;
}());
PaymentsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PaymentsService);

var _a;
//# sourceMappingURL=payments.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/premises.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PremisesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PremisesService = (function () {
    function PremisesService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/manage/premises';
        this.cache = {};
    }
    PremisesService.prototype.get = function () {
        var _this = this;
        return this.http.get(this.baseUrl, this.jwt())
            .map(function (response) {
            _this.cache.get = response.json();
            return response.json();
        });
    };
    PremisesService.prototype.put = function (premises) {
        return this.http.put(this.baseUrl, premises, this.jwt())
            .map(function (response) {
            return response.json();
        });
    };
    PremisesService.prototype.create = function (premises) {
        return this.http.post(this.baseUrl, premises, this.jwt())
            .map(function (response) {
            return response.json();
        });
    };
    PremisesService.prototype.open = function () {
        return this.http.post(this.baseUrl + '/open', {}, this.jwt())
            .map(function (response) {
            return response.json();
        });
    };
    PremisesService.prototype.close = function () {
        return this.http.post(this.baseUrl + '/close', {}, this.jwt())
            .map(function (response) {
            return response.json();
        });
    };
    //private helper methods
    PremisesService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    return PremisesService;
}());
PremisesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PremisesService);

var _a;
//# sourceMappingURL=premises.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "/manage/products";
        this.cache = {};
    }
    ProductService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(this.baseUrl, this.jwt())
            .map(function (response) {
            _this.cache.get = response.json();
            return response.json();
        });
    };
    ProductService.prototype.get = function (_id) {
        return this.http.get(this.baseUrl + '/' + _id, this.jwt())
            .map(function (response) {
            return response.json();
        });
    };
    ProductService.prototype.put = function (product) {
        return this.http.put(this.baseUrl + '/' + product._id, product, this.jwt())
            .map(function (response) {
            return response.json();
        });
    };
    ProductService.prototype.create = function (product) {
        var _this = this;
        return this.http.post(this.baseUrl, product, this.jwt())
            .map(function (response) {
            _this.cache.get[_this.cache.get.length] = product;
            return response.json();
        });
    };
    ProductService.prototype.delete = function (_id) {
        return this.http.delete(this.baseUrl + '/' + _id, this.jwt())
            .map(function (response) {
            if (response.status >= 200 && response.status <= 300) {
                return {};
            }
            return response.json();
        });
    };
    //private helper methods
    ProductService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    return ProductService;
}());
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/table.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TableService = (function () {
    function TableService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
        this.cache = {};
    }
    TableService.prototype.get = function () {
        var _this = this;
        if (typeof this.cache.get == 'undefined') {
            return this.http.get(this.baseUrl + '/manage/tables', this.jwt())
                .map(function (response) {
                _this.cache.get = response.json();
                return response.json();
            });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.cache.get);
        }
    };
    TableService.prototype.put = function (table) {
        return this.http.put(this.baseUrl + '/manage/tables/' + table._id, table, this.jwt())
            .map(function (response) {
            return response.json();
        });
    };
    TableService.prototype.create = function (table) {
        return this.http.post(this.baseUrl + '/manage/tables', table, this.jwt())
            .map(function (response) {
            return response.json();
        });
    };
    TableService.prototype.delete = function (_id) {
        return this.http.delete(this.baseUrl + '/manage/tables/' + _id, this.jwt())
            .map(function (response) {
            if (response.status >= 200 && response.status <= 300) {
                return {};
            }
            return response.json();
        });
    };
    //private helper methods
    TableService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    return TableService;
}());
TableService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TableService);

var _a;
//# sourceMappingURL=table.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
        this.userChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            this.get().subscribe();
        }
    }
    UserService.prototype.get = function () {
        var _this = this;
        return this.http.get(this.baseUrl + '/users/', this.jwt())
            .map(function (response) {
            _this.loggedInUser = response.json();
            _this.userChange.next(response.json());
            return response.json();
        });
    };
    UserService.prototype.setupVerification = function () {
        return this.http.get(this.baseUrl + '/users/setup', this.jwt())
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.checkUsername = function (username) {
        return this.http.post(this.baseUrl + '/users/username', { username: username })
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.register = function (model) {
        return this.http.post(this.baseUrl + '/users/', model, this.headers())
            .map(function (response) {
            var token = response.json();
            if (token && token.token) {
                localStorage.setItem('currentUser', JSON.stringify(token));
            }
            return token;
        });
    };
    UserService.prototype.requestRecovery = function (email) {
        return this.http.post(this.baseUrl + '/users/recover', { email: email })
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.resetPassword = function (guid, password) {
        return this.http.post(this.baseUrl + '/users/recover/' + guid, { password: password })
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.changePassword = function (original, updated) {
        return this.http.post(this.baseUrl + '/users/password/reset', { password: original, new: updated }, this.jwt())
            .map(function (response) {
            if (response.status === 200 || response.status === 201) {
                return {};
            }
            return response.json();
        });
    };
    UserService.prototype.getLoggedInUser = function () {
        return this.loggedInUser;
    };
    //private helper methods
    UserService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    UserService.prototype.headers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Content-Type': 'application/json' });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/settings/children/general.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralSettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralSettingsComponent = (function () {
    function GeneralSettingsComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.model = {};
        this.loading = false;
    }
    GeneralSettingsComponent.prototype.ngOnInit = function () {
    };
    GeneralSettingsComponent.prototype.saveChanges = function () {
        alert('Save Changes not implemented');
    };
    return GeneralSettingsComponent;
}());
GeneralSettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/settings/children/general.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* UserService */]) === "function" && _c || Object])
], GeneralSettingsComponent);

var _a, _b, _c;
//# sourceMappingURL=general.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/children/general.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row align-items-center\">\n    <div class=\"col-md-6 col-md-offset-3\">\n      <h2>{{'SETTINGS.ACCOUNT' | translate}}</h2>\n        <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && saveChanges()\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{'has-error':f.submitted && !username.valid }\">\n          <label for=\"username\">{{'GENERAL.USERNAME' | translate}}</label>\n          <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n          <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">{{'LOGIN.USERNAME_IS_REQUIRED' | translate}}</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n            <label for=\"email\">{{'GENERAL.EMAIL' | translate}}</label>\n            <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">{{'LOGIN.EMAIL_IS_REQUIRED' | translate}}</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">{{'GENERAL.SAVE_CHANGES' | translate}}</button>\n            <a [routerLink]=\"['/account/deactivate']\">{{'SETTINGS.DEACTIVATE_ACCOUNT' | translate}}</a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/settings/children/password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordSettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PasswordSettingsComponent = (function () {
    function PasswordSettingsComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.errorMsg = "";
        this.original = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.new = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(/\d+/)]);
        this.confirmation = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].equalTo(this.new)]);
    }
    PasswordSettingsComponent.prototype.ngOnInit = function () {
    };
    PasswordSettingsComponent.prototype.changePassword = function () {
        var _this = this;
        this.loading = true;
        this.errorMsg = "";
        this.userService.changePassword(this.original.value, this.new.value)
            .subscribe(function () {
            //do nothing
            _this.loading = false;
            _this.router.navigate(['/logout']);
        }, function (error) {
            _this.loading = false;
            if (error.status >= 400 && error.status < 500) {
                _this.errorMsg = error['_body'].message;
            }
        });
    };
    PasswordSettingsComponent.prototype.getNewPasswordError = function () {
        return this.new.hasError('required') ? 'You must enter a new password' :
            this.new.hasError('pattern') ? 'Your new password must contain atleast one number (0 - 9)' :
                !this.new.hasError('minLength') ? 'Your new password must be at least 8 characters long' : 'Your new password must be atleast 8 characters long and contain atleast one number (0 - 9)';
    };
    PasswordSettingsComponent.prototype.getConfirmationErrorMessage = function () {
        return this.confirmation.hasError('required') ? 'You must confirm your new password' :
            this.confirmation.hasError('equalTo') ? 'Passwords do not match' : '';
    };
    return PasswordSettingsComponent;
}());
PasswordSettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/settings/children/password.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["f" /* UserService */]) === "function" && _c || Object])
], PasswordSettingsComponent);

var _a, _b, _c;
//# sourceMappingURL=password.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/children/password.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row align-items-center\">\n    <div class=\"col-md-6 col-md-offset-3\">\n      <h3>{{'SETTINGS.PASSWORD' | translate}}</h3>\n      <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && changePassword()\" novalidate class=\"col-12\">\n        <mat-form-field class=\"full-width\">\n          <input matInput placeholder=\"{{'SETTINGS.ORIGINAL' | translate}}\" [formControl]=\"original\" required type=\"password\"/>\n          <mat-error *ngIf=\"original.invalid\">{{'SETTINGS.ORIGINAL_IS_REQUIRED' | translate}}</mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"full-width\">\n          <input matInput placeholder=\"{{'SETTINGS.NEW_PASSWORD' | translate}}\" [formControl]=\"new\" required type=\"password\"/>\n          <mat-error *ngIf=\"new.invalid\">{{getNewPasswordError()}}</mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"full-width\">\n          <input matInput placeholder=\"{{'SETTINGS.NEW_PASSWORD_CONFIRMATION' | translate}}\" [formControl]=\"confirmation\" required type=\"password\">\n          <mat-error *ngIf=\"confirmation.invalid\">{{getConfirmationErrorMessage()}}</mat-error>\n        </mat-form-field>\n          <h6 *ngIf=\"errorMsg != ''\" class=\"has-error\">{{errorMsg}}</h6>\n          <button mat-raised-button color=\"primary\" [disabled]=\"loading || original.invalid || new.invalid || confirmation.invalid\" class=\"btn btn-primary\">{{'SETTINGS.SUBMIT' | translate}}</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/settings/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__children_general_component__ = __webpack_require__("../../../../../src/app/settings/children/general.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__children_general_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__children_password_component__ = __webpack_require__("../../../../../src/app/settings/children/password.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__children_password_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_routes__ = __webpack_require__("../../../../../src/app/settings/settings.routes.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__settings_routes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_module__ = __webpack_require__("../../../../../src/app/settings/settings.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__settings_module__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsComponent = (function () {
    function SettingsComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/settings/settings.template.html"),
        styles: [__webpack_require__("../../../../../src/app/settings/settings.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* UserService */]) === "function" && _c || Object])
], SettingsComponent);

var _a, _b, _c;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index__ = __webpack_require__("../../../../../src/app/settings/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var SettingsModule = (function () {
    function SettingsModule() {
    }
    return SettingsModule;
}());
SettingsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__index__["b" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__index__["c" /* GeneralSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__index__["d" /* PasswordSettingsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["o" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["q" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MatFormFieldModule */]
        ],
        providers: []
    })
], SettingsModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("../../../../../src/app/settings/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__payments_index__ = __webpack_require__("../../../../../src/app/payments/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_index__ = __webpack_require__("../../../../../src/app/guards/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsRoutes; });




var SettingsRoutes = [
    { path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* SettingsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_index__["a" /* AuthGuard */]],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'general' },
            { path: 'general', component: __WEBPACK_IMPORTED_MODULE_0__index__["c" /* GeneralSettingsComponent */] },
            { path: 'payments', component: __WEBPACK_IMPORTED_MODULE_1__payments_index__["b" /* PaymentsComponent */] },
            { path: 'password', component: __WEBPACK_IMPORTED_MODULE_0__index__["d" /* PasswordSettingsComponent */] }
        ] }
];
//# sourceMappingURL=settings.routes.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row full-height\">\n    <div class=\"col-3 display-block full-height\">\n      <!-- User Header-->\n      <div class=\"col-12\">\n\n      </div>\n      <!--Settings List-->\n      <div class=\"col-12 btn-group-vertical side-list\">\n        <a [routerLink]=\"['/settings/general']\" class=\"btn btn-outline-secondary\" role=\"button\" aria-pressed=\"true\">{{'SETTINGS.GENERAL' | translate}} <i class=\"arrow right\"></i></a>\n        <a [routerLink]=\"['/settings/payments']\" class=\"btn btn-outline-secondary\" role=\"button\" aria-pressed=\"true\">{{'SETTINGS.PAYMENTS' | translate}} <i class=\"arrow right\"></i></a>\n        <a [routerLink]=\"['/settings/password']\" class=\"btn btn-outline-secondary\" role=\"button\" aria-pressed=\"true\">{{'SETTINGS.PASSWORD' | translate}} <i class=\"arrow right\"></i></a>\n      </div>\n    </div>\n    <div class=\"col-6 display-block full-height bg-white\">\n      <router-outlet></router-outlet>\n    </div>\n  <div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tables/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tables_component__ = __webpack_require__("../../../../../src/app/tables/tables.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__tables_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__tables_component__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tables_module__ = __webpack_require__("../../../../../src/app/tables/tables.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__tables_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/tables/modals/addTable.modal.html":
/***/ (function(module, exports) {

module.exports = "<h3 md-dialog-title *ngIf=\"!toEdit\">{{'TABLES.ADD' | translate}}</h3>\n<h3 md-dialog-title *ngIf=\"toEdit\">{{'TABLES.EDIT' | translate}}</h3>\n<div md-dialog-content>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Name\" type=\"text\" [(ngModel)]=\"newTableName\" required #name=\"ngModel\">\n  </mat-form-field>\n</div>\n<div md-dialog-actions class=\"text-align-right\">\n    <button mat-button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">{{'GENERAL.CANCEL' | translate}}</button>\n    <button mat-raised-button type=\"button\" color=\"primary\" *ngIf=\"!toEdit\" [disabled]=\"name.invalid\" (click)=\"submit()\">{{'GENERAL.ADD' | translate}}</button>\n    <button mat-raised-button type=\"button\" color=\"primary\" *ngIf=\"toEdit\" [disabled]=\"name.invalid\" (click)=\"submit()\">{{'GENERAL.SAVE' | translate}}</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tables/tables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__misc_index__ = __webpack_require__("../../../../../src/app/misc/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_table__ = __webpack_require__("../../../../../src/app/models/table.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_qrious__ = __webpack_require__("../../../../qrious/dist/qrious.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_qrious___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_qrious__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jszip__ = __webpack_require__("../../../../jszip/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jszip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jszip__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddTableDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TablesComponent = (function () {
    function TablesComponent(route, router, userService, dialog, tableService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.dialog = dialog;
        this.tableService = tableService;
        this.tables = [];
        this.loading = true;
    }
    TablesComponent.prototype.ngOnInit = function () {
        this.getTables();
    };
    TablesComponent.prototype.getTables = function () {
        //mocked call at the moment
        var _this = this;
        this.tableService.get()
            .subscribe(function (data) {
            _this.loading = false;
            _this.tables = data.tables;
        }, function (error) {
            _this.loading = false;
            alert(error);
        });
    };
    TablesComponent.prototype.downloadQrCode = function (index) {
        var qr = new __WEBPACK_IMPORTED_MODULE_7_qrious___default.a({
            value: this.tables[index]._id
        });
        return (qr.toDataURL('image/png'));
    };
    TablesComponent.prototype.downloadAll = function () {
        var zip = new __WEBPACK_IMPORTED_MODULE_8_jszip___default.a();
        for (var i = 0; i < this.tables.length; i++) {
            var qr = new __WEBPACK_IMPORTED_MODULE_7_qrious___default.a({
                value: this.tables[i]._id
            });
            var image = qr.toDataURL('image/png');
            zip.file(this.tables[i].name + ".png", image.substr(image.indexOf(',') + 1), { base64: true });
        }
        zip.generateAsync({ type: "base64" })
            .then(function (content) {
            // use content
            location.href = "data:application/zip;base64," + content;
        });
    };
    TablesComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddTableDialog, {
            width: '20%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (typeof result != 'undefined') {
                var newTable_1 = new __WEBPACK_IMPORTED_MODULE_6__models_table__["a" /* Table */]();
                newTable_1.name = result;
                _this.tableService.create(newTable_1)
                    .subscribe(function (data) {
                    newTable_1._id = data;
                    _this.tables = [newTable_1].concat(_this.tables);
                }, function (error) {
                    alert(error);
                });
            }
        });
    };
    TablesComponent.prototype.editDialog = function (index) {
        var _this = this;
        var dialogRef = this.dialog.open(AddTableDialog, {
            width: '20%'
        });
        dialogRef.componentInstance.toEdit = this.tables[index].name;
        dialogRef.afterClosed().subscribe(function (result) {
            if (typeof result != 'undefined') {
                var oldTable = _this.tables[index];
                var tableToEdit = _this.tables[index];
                tableToEdit.name = result;
                _this.tableService.put(tableToEdit)
                    .subscribe(function (data) {
                    //saved
                }, function (error) {
                    _this.tables[index] = oldTable;
                    alert('Table Update Failed');
                });
            }
        });
    };
    TablesComponent.prototype.deleteConfirmation = function (_id, index) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__misc_index__["b" /* ConfirmDeleteDialog */], {
            data: { params: { type: "table", name: this.tables[index].name } }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                //delete it
                _this.tableService.delete(_id)
                    .subscribe(function (data) {
                    _this.tables.splice(index, 1);
                }, function (error) {
                    alert(error);
                });
            }
            else {
                //keep it
            }
        });
    };
    return TablesComponent;
}());
TablesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/tables/tables.template.html"),
        styles: [__webpack_require__("../../../../../src/app/tables/tables.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["f" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["h" /* TableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["h" /* TableService */]) === "function" && _e || Object])
], TablesComponent);

var AddTableDialog = (function () {
    function AddTableDialog(dialogRef, translate) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.translate = translate;
        //Placeholder text so users don't have to type table every time
        this.translate.get('MANAGE.TABLES.TABLE').subscribe(function (res) {
            _this.newTableName = res + " ";
        });
    }
    AddTableDialog.prototype.ngOnInit = function () {
        if (typeof this.toEdit != 'undefined') {
            this.newTableName = this.toEdit;
        }
    };
    AddTableDialog.prototype.close = function () {
        this.dialogRef.close(undefined);
    };
    AddTableDialog.prototype.submit = function () {
        this.dialogRef.close(this.newTableName);
    };
    return AddTableDialog;
}());
AddTableDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-table-dialog',
        template: __webpack_require__("../../../../../src/app/tables/modals/addTable.modal.html")
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialogRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _g || Object])
], AddTableDialog);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=tables.component.js.map

/***/ }),

/***/ "../../../../../src/app/tables/tables.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index__ = __webpack_require__("../../../../../src/app/tables/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var TablesModule = (function () {
    function TablesModule() {
    }
    return TablesModule;
}());
TablesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__index__["b" /* TablesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__index__["c" /* AddTableDialog */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["o" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["p" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["q" /* MatInputModule */]
        ],
        providers: [],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_9__index__["c" /* AddTableDialog */]]
    })
], TablesModule);

//# sourceMappingURL=tables.module.js.map

/***/ }),

/***/ "../../../../../src/app/tables/tables.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\n  margin-top: 10px; }\n\n.mat-icon.side-by-side {\n  display: table-cell; }\n\na.side-by-side {\n  display: table-cell; }\n\ndiv.center-spinner {\n  margin: auto;\n  width: 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tables/tables.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <h3>{{'TABLES.TABLES' | translate}}</h3>\n  </div>\n  <div class=\"row justify-content-center\">\n    <span>{{'MANAGE.TABLES.DESCRIPTION' | translate}}</span>\n  </div>\n  <div class=\"row justify-content-center\">\n    <button type=\"button\" mat-raised-button color=\"primary\" class=\"btn btn-primary half-width rounded\" (click)=\"openDialog()\">{{'GENERAL.ADD' | translate}}</button>\n  </div>\n  <div class=\"row\" *ngIf=\"loading\">\n    <div class=\"row center-spinner\"><md-spinner></md-spinner></div>\n  </div>\n  <div class=\"row\" *ngIf=\"!loading\">\n    <table class=\"table\">\n      <tr>\n        <td colspan=\"4\">\n          <button type=\"button\" class=\"btn btn-primary rounded float-right\" (click)=\"downloadAll()\">{{'TABLES.DOWNLOAD_ALL' | translate}}</button>\n        </td>\n      <tr>\n      <tr *ngFor=\"let table of tables; let i = index\">\n        <td class=\"col-9\">{{table.name}}</td>\n        <td class=\"col-3\">\n          <a class=\"side-by-side no-a-styling\" href=\"{{downloadQrCode(i)}}\" download=\"{{table.name}}.png\"><mat-icon matTooltip=\"{{'TABLES.DOWNLOAD' | translate}}\" matTooltipPosition=\"above\">file_download</mat-icon></a>\n          <mat-icon matTooltip=\"{{'GENERAL.EDIT' | translate}}\" matTooltipPosition=\"above\" class=\"side-by-side\" (click)=\"editDialog(i)\">edit</mat-icon>\n          <mat-icon matTooltip=\"{{'GENERAL.DELETE' | translate}}\" matTooltipPosition=\"above\" class=\"side-by-side\" (click)=\"deleteConfirmation(table._id, i)\">delete_forever</mat-icon>\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: 'https://api.wildapplications.com'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[2]);
//# sourceMappingURL=main.bundle.js.map