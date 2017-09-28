import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Table } from '../models/index';

@Injectable()
export class TableService {

  baseUrl: string = "http://api.wildapplications.com";
  cache: any = {};

  constructor( private http: Http ){
  }

  get() {
    if(typeof this.cache.get == 'undefined'){
      return this.http.get(this.baseUrl + '/manage/tables', this.jwt())
        .map((response: Response) => {
          this.cache.get = response.json();
          return response.json();
        });
    }else{
      return Observable.of(this.cache.get);
    }

  }

  put(table: Table){
    return this.http.put(this.baseUrl + '/manage/tables/' + table._id, table, this.jwt())
      .map((response: Response) => {
        return response.json();
      })
  }

  create(table: Table){
    return this.http.post(this.baseUrl + '/manage/tables', table, this.jwt())
      .map((response: Response) => {
        return response.json();
      })
  }

  delete(_id: string){
    return this.http.delete(this.baseUrl + '/manage/tables/' + _id, this.jwt())
      .map((response: Response) => {
        if(response.status >= 200 && response.status <= 300){
          return {}
        }
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
