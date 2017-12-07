import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { UserService } from '../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'reset.template.html'
})

export class ResetComponent {
  loading = false;

  guid: string = "";
  private sub: any;

  password = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/\d+/)]);
  confirmation = new FormControl('', [Validators.required, CustomValidators.equalTo(this.password)]);
  recoveryEmailSent: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService ){
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a new password' :
      this.password.hasError('pattern') ? 'Your new password must contain atleast one number (0 - 9)':
        !this.password.hasError('minLength') ? 'Your new password must be at least 8 characters long' : 'Your new password must be atleast 8 characters long and contain atleast one number (0 - 9)';
  }

  getConfirmationErrorMessage(){
    return this.confirmation.hasError('required') ? 'You must confirm your new password' :
      this.confirmation.hasError('equalTo') ? 'Passwords do not match': '';
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.guid = params['guid'];
    });
  }

  public reset() {
    this.loading = true;
    this.userService.resetPassword(this.guid, this.password.value)
      .subscribe((data) => {
        this.router.navigate(['/login']);
      }, error => {
        console.log(error);
      })
  }

  ngOnDestroy() {
   this.sub.unsubscribe();
 }
}
