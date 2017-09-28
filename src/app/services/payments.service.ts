import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PaymentsService {

  cache: any = {};
  stripeUrl: string = "https://connect.stripe.com/oauth/";
  baseUrl: string = "http://api.wildapplications.com/manage/payments";
  clientId: string = "ca_BNy5AOnoJYsR3lfXeO6mmIqVMIy4D469";

  constructor( private http: Http ){
  }

  initialiseConnection(){
    let state = Math.random().toString(20);
    localStorage.setItem('state', state);

    var urlToNav = this.stripeUrl;
    urlToNav += "authorize";
    urlToNav += "?";
    urlToNav += "response_type=code";
    urlToNav += "&";
    urlToNav += "client_id="+this.clientId;
    urlToNav += "&";
    urlToNav += "scope=read_write";
    urlToNav += "&";
    urlToNav += "state=" + state;
    window.location.href = urlToNav;
  }

  verifyState(passedState: string){
    let storedState = localStorage.getItem("state");
    if( storedState ) {
      //exists
      return storedState == passedState;
    }
  }

  passAccessToken(code: string){
    return this.http.post(this.baseUrl + "code", {code: code}, this.jwt())
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
