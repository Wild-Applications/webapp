import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService, UserService, ErrorHandler } from '../services/index';

import { TabProgressButton } from '../ui/progress-button.ui';

@Component({
  moduleId: module.id,
  templateUrl: 'login.template.html',
  styleUrls: ['../app.scss']
})

export class LoginComponent implements OnInit {
  public model: any = {};
  loading = false;
  returnUrl: string;

  public error: string = undefined;

  public username = new FormControl('', [Validators.required]);
  public password = new FormControl('', [Validators.required]);

  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService, private userService: UserService, private errorHandler: ErrorHandler ){}

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    if( this.authenticationService.isLoggedIn()){
      this.router.navigate([this.returnUrl]);
    }
  }
  //

  public login() {
    this.loading = true;
    this.error = undefined;
    this.authenticationService.login(this.username.value, this.password.value)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          if(error.status>=400 && error.status < 500){
            //deal with the error
            if(error._body && typeof error._body == 'string'){
              this.error = error._body;
            }else if(typeof error._body.message == 'string'){
              this.error = error._body.message;
            }
          }

          this.loading = false;
        }
      );
  }

  test(){
    return true;
  }
}
