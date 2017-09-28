import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Order } from '../models/index';

@Injectable()
export class OrderService {

  baseUrl: string = "http://192.168.99.100:31473/orders";
  cache: any = {};

  constructor( private http: Http ){
  }

  getAll() {
    if(typeof this.cache.get == 'undefined'){
      return this.http.get(this.baseUrl, this.jwt())
        .map((response: Response) => {
          this.cache.get = response.json();
          return response.json();
        });
    }else{
      return Observable.of(this.cache.get);
    }

  }

  get(_id: string){
    return this.http.get(this.baseUrl + '/' + _id, this.jwt())
      .map((response: Response) => {
        return response.json();
      })
  }

  put(order: Order){
    return this.http.put(this.baseUrl + '/' + order._id, order, this.jwt())
      .map((response: Response) => {
        return response.json();
      })
  }

  create(order: Order){
    return this.http.post(this.baseUrl, order, this.jwt())
      .map((response: Response) => {
        this.cache.get[this.cache.get.length] = order;
        return response.json();
      })
  }

  delete(_id: string){
    return this.http.delete(this.baseUrl + '/' + _id, this.jwt())
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