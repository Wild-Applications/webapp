import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import { Premises } from '../models/index';

@Injectable()
export class PremisesService {

  baseUrl: string = environment.apiUrl + '/manage/premises';
  cache: any = {};

  constructor( private http: Http ){
  }

  get() {
    return this.http.get(this.baseUrl, this.jwt())
      .map((response: Response) => {
        this.cache.get = response.json();
        return response.json();
      });
  }

  put(premises: Premises){
    return this.http.put(this.baseUrl, premises, this.jwt())
      .map((response: Response) => {
        return response.json();
      })
  }

  create(premises: any){
    return this.http.post(this.baseUrl, premises, this.jwt())
      .map((response: Response) => {
        return response.json();
      });
  }

  open(){
    return this.http.post(this.baseUrl + '/open', {}, this.jwt())
      .map((response: Response) => {
        return response.json();
      })
  }

  close(){
    return this.http.post(this.baseUrl + '/close', {}, this.jwt())
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
