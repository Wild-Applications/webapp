import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService, UserService, ErrorHandler } from '../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'login.template.html'
})

export class LoginComponent implements OnInit {
  public model: any = {}
  loading = false;
  returnUrl: string;

  public error: string = undefined;

  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService, private userService: UserService, private errorHandler: ErrorHandler ){}

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    if( this.authenticationService.isLoggedIn()){
      this.router.navigate([this.returnUrl]);
    }
  }

  public login() {
    this.loading = true;
    this.error = undefined;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log(error);
          if(error.status>=400 && error.status < 500){
            //deal with the error
            this.error = error._body.message;
          }

          this.loading = false;
        }
      );
  }
}
