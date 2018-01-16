import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService, PremisesService } from '../../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'premises.template.html',
  styleUrls: [ '../manage.scss' ]
})

export class ManagePremisesComponent implements OnInit {

  model: any = {};
  loading: boolean = true;
  loadError: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private premisesService: PremisesService ){}

  ngOnInit() {
    this.getPremises();
  }

  getPremises(){
    this.loading = true;
    this.loadError = false;
    this.premisesService.get()
      .subscribe(
        data => {
          this.loading = false;
          this.model = data;
        },
        error => {
          if(error.status == 404){
            //user hasnt created a premises so create the premises rather than update it
            this.premisesService.create({name: this.userService.getLoggedInUser().username})
              .subscribe(
                data => {
                  //do nothing
                  this.model.name = this.userService.getLoggedInUser().username;
                  this.loading = false;
                },
                error => {
                  this.loadError = true;
                  this.loading = false;
                }
              )
          }else{
            this.loadError = true;
            this.loading = false;
          }
        }
      );
  }


  saveChanges(){
    this.premisesService.put(this.model)
      .subscribe(
        data => {
          //do nothing
        },
        error => {
          alert(error);
        }
      )
  }
}
