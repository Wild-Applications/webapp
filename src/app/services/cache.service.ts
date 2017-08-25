import { Injectable } from '@angular/core';


@Injectable()
export class CacheService {

  cache: any = {};

  constructor( ){
  }

  put(_id, object){
    this.cache[_id] = object;
  }

  get(_id){
    return this.cache[_id];
  }
}
