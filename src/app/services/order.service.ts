import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import { Order } from '../models/index';

@Injectable()
export class OrderService {

  baseUrl: string = environment.apiUrl + "/orders";
  cache: any = {};

  constructor( private http: Http ){
  }

  getPending() {
    console.log('calling');
    return this.http.get(this.baseUrl + '/pending', this.jwt())
     .map((response: Response) => response.json())
      .catch((error:any) => Observable.throw( error || 'Server error'));;
  }

  getComplete(){
      return this.http.get(this.baseUrl + '/complete', this.jwt())
        .map((response: Response) => {
          return response.json();
        })
  }

  getCompleteByDay(year, month, day){
    return this.http.get(this.baseUrl + "/complete/" + year + "/" + month +  "/" + day, this.jwt() )
      .map((response:Response) => {
        return response.json();
      })
  }

  getOrderBreakdown(){
    return this.http.get(this.baseUrl + '/complete/breakdown', this.jwt())
      .map((response: Response) => {
        return response.json();
      })
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

  complete(order: Order){
    return this.http.post(this.baseUrl + '/complete/' + order._id, {}, this.jwt())
      .map((response: Response) => {
        return response.json();
      });
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

  cancel(_id: string){
    return this.http.post(this.baseUrl + '/cancel/' + _id, {}, this.jwt())
      .map((response: Response)=>{
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
