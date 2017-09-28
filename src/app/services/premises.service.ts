import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Premises } from '../models/index';

@Injectable()
export class PremisesService {

  baseUrl: string = "http://api.wildapplications.com";
  cache: any = {};

  constructor( private http: Http ){
  }

  get() {
    if(typeof this.cache.get == 'undefined'){
      return this.http.get(this.baseUrl + '/manage/premises', this.jwt())
        .map((response: Response) => {
          this.cache.get = response.json();
          return response.json();
        });
    }else{
      return Observable.of(this.cache.get);
    }

  }

  put(premises: Premises){
    return this.http.put(this.baseUrl + '/manage/premises', premises, this.jwt())
      .map((response: Response) => {
        return response.json();
      })
  }
  //private helper methods
  private jwt(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if( currentUser ){
      let headers = new Headers({ 'Authorization':'Bearer ' + currentUser.token});
      return new RequestOptions({ headers: headers});
    }
  }
}
