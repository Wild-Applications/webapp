import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'hours.template.html',
  styleUrls: [ '../manage.scss' ]
})

export class ManageHoursComponent implements OnInit {

  model: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService ){}

  ngOnInit() {

  }

  saveChanges(){
    alert('Save Changes not implemented');
  }
}
