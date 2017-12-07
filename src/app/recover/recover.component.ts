import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

import { UserService } from '../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'recover.template.html'
})

export class RecoverComponent {
  loading = false;

  email = new FormControl('', [Validators.required]);

  public recoveryEmailSent: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService ){}

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  public recover() {
    this.loading = true;
    this.userService.requestRecovery(this.email.value)
      .subscribe((data) => {
        this.recoveryEmailSent = true;
        this.loading = false;
      }, error => {
        console.log(error);
      })
  }
}
