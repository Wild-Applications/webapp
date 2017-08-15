import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'payment.template.html'
})

export class PaymentSettingsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService ){}

  ngOnInit() {

  }
}
