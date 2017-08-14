import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'login.template.html'
})

export class LoginComponent implements OnInit {
  model: any = {}
  loading = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService ){}

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  login() {
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