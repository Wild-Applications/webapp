import { Injectable, Injector } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthenticationService, LoadHandler } from './index';


@Injectable()
export class HttpService extends Http {

  authenticationService: AuthenticationService;
  loadHandler: LoadHandler;

  constructor(backend: XHRBackend, defaultOptions: RequestOptions, private router: Router, injector: Injector){
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
      this.catchErrors();
    }).finally(() => {
      if(this.loadHandler){
        this.loadHandler.finish();
      }
    }).catch(this.catchErrors());
  }


  private catchErrors() {
    return (res: Response) => {
      var errorMsg = JSON.parse(res['_body']);
      //res['_body'] = JSON.parse(errorMsg['message']);
      //handle authorization errors
      if(res.status === 401 || res.status === 403){
        this.authenticationService.logout();
        this.router.navigate(['/login']);
      }
      return Observable.throw(res);
    }
  }
}
