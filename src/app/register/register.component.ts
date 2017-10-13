import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService, PremisesService } from '../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'register.template.html'
})

export class RegisterComponent implements OnInit {

  public model: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private premisesService: PremisesService){}

  ngOnInit() {

  }

  register(){
    this.userService.register(this.model)
      .subscribe(
        data => {
          this.router.navigate(['/setup']);
        },
        error => {
          alert(error);
        }
      );
  }

}
