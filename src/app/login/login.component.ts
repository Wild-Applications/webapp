import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService, UserService } from '../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'login.template.html'
})

export class LoginComponent implements OnInit {
  public model: any = {}
  loading = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService, private userService: UserService ){}

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    if( this.authenticationService.isLoggedIn()){
      this.router.navigate([this.returnUrl]);
    }
  }

  public login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          alert(error);
          this.loading = false;
        }
      );
  }
}
