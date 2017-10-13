import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  moduleId: module.id,
  templateUrl: 'payment.template.html',
  styleUrls: [ '../onboarding.scss' ]
})

export class PaymentComponent implements OnInit {

  model: any = {};
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router ){}

  ngOnInit() {

  }

  public next(){
    this.router.navigate(['/setup/menu']);
  }

}
