import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';


import { User } from '../models/index';

@Injectable()
export class UserService {

  baseUrl: string = environment.apiUrl;
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

  register(model: any){
    return this.http.post(this.baseUrl + '/users/', model, this.headers())
      .map((response: Response) => {
        let token = response.json();
        if(token && token.token){
          localStorage.setItem('currentUser', JSON.stringify(token));
        }

        return token;
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

  private headers(){
    let headers = new Headers({'Content-Type': 'application/json'});
    return new RequestOptions({headers:headers});
  }
}
