import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

  baseUrl: string = "http://api.wildapplications.com";

  constructor( private http: Http){}

  login( username: string, password:string ){
    return this.http.post(this.baseUrl + '/users/login', {username:username, password:password}, this.headers())
      .map((response: Response) => {
        let token = response.json();
        if(token && token.token){
          localStorage.setItem('currentUser', JSON.stringify(token));
        }

        return token;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(){
    if(localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }



  private headers(){
    let headers = new Headers({'Content-Type': 'application/json'});
    return new RequestOptions({headers:headers});
  }
}
