import { Injectable, Injector } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthenticationService, LoadHandler, ErrorHandler } from './index';


@Injectable()
export class HttpService extends Http {

  authenticationService: AuthenticationService;
  loadHandler: LoadHandler;

  constructor(backend: XHRBackend, defaultOptions: RequestOptions, private router: Router, injector: Injector, private errorHandler: ErrorHandler){
    super(backend, defaultOptions);
    setTimeout(() => {
      this.authenticationService = injector.get(AuthenticationService);
      this.loadHandler = injector.get(LoadHandler);
    });
  }

  request( url: string | Request, options?: RequestOptionsArgs) : Observable<Response> {
    if(this.loadHandler){
      this.loadHandler.start();
    }
    return super.request(url, options).do((response: Response) => {

    }, error => {
      this.onError(error);
    }).finally(() => {
      if(this.loadHandler){
        this.loadHandler.finish();
      }
    }).catch((error: any, caught: Observable<any>):Observable<any>=>{
      if(error.ok){
        if(typeof error['_body'] == 'string'){
          try{
            error['_body'] = JSON.parse(error['_body']);
          }catch(e){

          }
        }
        if(error.status === 401 || error.status === 403){
          this.authenticationService.logout();
          this.router.navigate(['/login']);
        }else if(error.status >= 500){
          if(this.errorHandler){
            this.errorHandler.show(error);
          }
        }
      }
      return Observable.throw(error);
    });
  }


  private catchErrors() {
    return (res: Response) => {
      if(typeof res['_body'] == "string"){
        res['_body'] = JSON.parse(res['_body']);
      }
      console.log(res['_body']);
      //handle authorization errors
      if(res.status === 401 || res.status === 403){
        this.authenticationService.logout();
        this.router.navigate(['/login']);
      }else if(res.status >= 500){
        this.errorHandler.show(res['_body']);
      }
      return Observable.throw(res);
    }
  }


  private onError(error: any): void {
    //do nothing I guess?
  }
}
