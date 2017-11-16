import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService, PremisesService } from '../services/index';


import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

@Component({
  moduleId: module.id,
  templateUrl: 'register.template.html'
})

export class RegisterComponent implements OnInit {

  public model: any = {};
  public validUsername: boolean = true;
  public usernameCheckInFlight: boolean = false;

  private usernameUpdated: Subject<string> = new Subject<string>();

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private premisesService: PremisesService){
    const subscription = this.usernameUpdated
      .debounceTime(1000)
      .distinctUntilChanged()
      .subscribe((value) => {
        this.userService.checkUsername(value)
          .subscribe(data => {
            this.usernameCheckInFlight = false;
            this.validUsername = !data.taken;
          }, error => {
            this.usernameCheckInFlight = false;
            console.log(error);
          })
      });
  }

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

  checkUsername(){
    this.usernameCheckInFlight = true;
    this.usernameUpdated.next(this.model.username);

  }

}
