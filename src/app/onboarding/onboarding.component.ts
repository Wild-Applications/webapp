import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';

import { TranslateService } from '@ngx-translate/core';


@Component({
  moduleId: module.id,
  templateUrl: 'onboarding.template.html',
  styleUrls: ['./onboarding.scss']
})

export class OnboardingComponent implements OnInit {

  orders: any[];
  status: any = {};

  constructor(private route: ActivatedRoute, private router: Router, public dialog: MatDialog ){}

  ngOnInit() {
    this.status['premises'] = 0;
    this.status['payments'] = 0;
  }
}
