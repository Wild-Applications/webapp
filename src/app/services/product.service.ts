import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Product } from '../models/index';

@Injectable()
export class ProductService {

  baseUrl: string = "http://192.168.99.100:31473/manage/products";
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

  put(product: Product){
    return this.http.put(this.baseUrl + '/' + product._id, product, this.jwt())
      .map((response: Response) => {
        return response.json();
      })
  }

  create(product: Product){
    return this.http.post(this.baseUrl, product, this.jwt())
      .map((response: Response) => {
        this.cache.get[this.cache.get.length] = product;
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
