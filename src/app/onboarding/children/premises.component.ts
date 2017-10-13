import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PremisesService } from '../../services/index';


@Component({
  moduleId: module.id,
  templateUrl: 'premises.template.html',
  styleUrls: [ '../onboarding.scss' ]
})

export class PremisesComponent implements OnInit {

  model: any = {};
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private premisesService: PremisesService ){}

  ngOnInit() {

  }

  public create(){
    this.premisesService.create(this.model)
      .subscribe(
        data => {
          this.router.navigate(['/setup/payments']);
        },
        error => {
          alert(error);
        }
      )

  }

}
