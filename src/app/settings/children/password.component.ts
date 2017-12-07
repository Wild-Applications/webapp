import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { UserService } from '../../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'password.template.html'
})

export class PasswordSettingsComponent implements OnInit {

  loading: boolean = false;
  errorMsg: string = ""

  original = new FormControl('', [Validators.required]);
  new = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/\d+/)]);
  confirmation = new FormControl('', [Validators.required, CustomValidators.equalTo(this.new)]);

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService ){}

  ngOnInit() {

  }

  changePassword(){
    this.loading = true;
    this.errorMsg = "";
    this.userService.changePassword(this.original.value, this.new.value)
      .subscribe(() => {
        //do nothing
        this.loading = false;
        this.router.navigate(['/logout']);
      }, error => {
        this.loading = false;
        if(error.status>=400 && error.status < 500){
          this.errorMsg = error['_body'].message;
        }
      })
  }

  getNewPasswordError() {
    return this.new.hasError('required') ? 'You must enter a new password' :
      this.new.hasError('pattern') ? 'Your new password must contain atleast one number (0 - 9)':
        !this.new.hasError('minLength') ? 'Your new password must be at least 8 characters long' : 'Your new password must be atleast 8 characters long and contain atleast one number (0 - 9)';
  }

  getConfirmationErrorMessage(){
    return this.confirmation.hasError('required') ? 'You must confirm your new password' :
      this.confirmation.hasError('equalTo') ? 'Passwords do not match': '';
  }
}
