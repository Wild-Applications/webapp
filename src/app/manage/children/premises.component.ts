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

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private premisesService: PremisesService ){}

  ngOnInit() {
    this.getPremises();
  }

  getPremises(){
    this.premisesService.get()
      .subscribe(
        data => {
          this.model = data;
        },
        error => {
          alert(error);
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
