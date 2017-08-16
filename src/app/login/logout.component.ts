import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'login.template.html'
})

export class LogoutComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService ){}

  ngOnInit() {

    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
