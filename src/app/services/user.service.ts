import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { User } from '../models/index';

@Injectable()
export class UserService {

  baseUrl: string = "http://192.168.99.100:31598";
  loggedInUser: User;
  userChange: Subject<User> = new Subject<User>();

  constructor( private http: Http ){
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if( currentUser && currentUser.token ){
      this.get().subscribe();
    }
  }

  get() {
    return this.http.get(this.baseUrl + '/users/', this.jwt())
      .map((response: Response) => {
        this.loggedInUser = response.json();
        this.userChange.next(response.json());
        return response.json();
      });
  }

  getLoggedInUser(){
    return this.loggedInUser;
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
