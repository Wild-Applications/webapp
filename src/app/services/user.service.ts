import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../models/index';

@Injectable()
export class UserService {

  baseUrl: string = "http://192.168.99.100:31598";

  constructor( private http: Http ){}

  get() {
    return this.http.get(this.baseUrl + '/users/', this.jwt())
      .map((response: Response) => {
        alert(JSON.stringify(response.json()));
        return response.json();
      });
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
