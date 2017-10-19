import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import { Menu } from '../models/index';

@Injectable()
export class MenuService {

  baseUrl: string = environment.apiUrl + "/manage/menus";
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

  put(menu: Menu){
    return this.http.put(this.baseUrl + '/' + menu._id, menu, this.jwt())
      .map((response: Response) => {
        return response.json();
      })
  }

  create(menu: Menu){
    return this.http.post(this.baseUrl, menu, this.jwt())
      .map((response: Response) => {
        this.cache.get[this.cache.get.length] = menu;
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

  makeActive(_id: string){
    return this.http.post(this.baseUrl + '/active/' + _id, {}, this.jwt())
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
