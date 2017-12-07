import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService, ErrorHandler, PremisesService } from '../services/index';

import { MatProgressSpinnerModule, MatSlideToggleModule } from '@angular/material';

@Component({
  moduleId: module.id,
  templateUrl: 'home.template.html'
})

export class HomeComponent implements OnInit {

  setup: any = {};
  validSetup: boolean = false;
  loadingSetup: boolean = true;
  setupLoadError: boolean = true;

  premises: any = {};
  premisesLoadError: boolean = false;

  user: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private errorHandler: ErrorHandler, private premisesService: PremisesService ){}

  ngOnInit() {
    this.userService.userChange.subscribe((user)=>{
      this.user = user;
    });

    this.userService.setupVerification()
      .subscribe(data => {
        this.setup = data;
        if(data.premises && data.payment && data.menu && data.active){
          this.validSetup = true;
          this.loadingSetup = false;
        }
      }, error => {
        if(error.status>=400 && error.status < 500){
          //deal with the error
          this.setupLoadError = true;
        }
      });

    this.premisesService.get()
      .subscribe(data => {
        this.premises = data;
      }, error => {
        this.premisesLoadError = true;
      })
  }

  changePremisesStatus(){
    //this.premises.open = !this.premises.open;
    if(this.premises.open){
      //previously it was closes, now we want to open it
      this.premisesService.open()
        .subscribe(data => {
          //do nothing
        }, error => {
          this.premises.open = !this.premises.open;
          this.errorHandler.show(error);
        })
    }else{
      //close it
      this.premisesService.close()
        .subscribe(data => {
          //do nothing
        }, error => {
          this.premises.open = !this.premises.open;
          this.errorHandler.show(error);;
        })
    }
  }
}
