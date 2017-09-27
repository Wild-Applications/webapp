import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService, ErrorHandler } from '../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'home.template.html'
})

export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private errorHandler: ErrorHandler ){}

  ngOnInit() {
    this.userService.get()
      .subscribe(
        data => {
        },
        error => {
        }
      );
  }
}
