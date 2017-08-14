import { Injectable, Injector } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class HttpService extends Http {

  authenticationService: AuthenticationService;

  constructor(backend: XHRBackend, defaultOptions: RequestOptions, private router: Router, injector: Injector){
    super(backend, defaultOptions);
    setTimeout(() => this.authenticationService = injector.get(AuthenticationService));
  }

  request( url: string | Request, options?: RequestOptionsArgs) : Observable<Response> {
    return super.request(url, options).catch(this.catchErrors());
  }


  private catchErrors() {
    return (res: Response) => {
      //handle authorization errors
      if(res.status === 401 || res.status === 403){
        this.authenticationService.logout();
        this.router.navigate(['/login']);
      }
      return Observable.throw(res);
    }
  }
}
