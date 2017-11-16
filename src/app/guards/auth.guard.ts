import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private router: Router ){}

  canActivate( router: ActivatedRouteSnapshot, state: RouterStateSnapshot ){
    if(localStorage.getItem('currentUser')) {
      return true;
    }

    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}

@Injectable()
export class NotAuthGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate( router: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(localStorage.getItem('currentUser')){
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}


@Injectable()
export class IsLoggedInGuard implements CanActivate {
  constructor( private router: Router ){}

  canActivate( router: ActivatedRouteSnapshot, state: RouterStateSnapshot ){
    if(!localStorage.getItem('currentUser')) {
      return true;
    }

    this.router.navigate(['/home']);
    return false;
  }
}
