import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MdDialog, MdDialogRef} from '@angular/material';

import { TranslateService } from '@ngx-translate/core';

import { UserService } from '../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'menus.template.html',
  styleUrls: ['./menus.scss']
})

export class MenusComponent implements OnInit {



  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, public dialog: MdDialog ){}

  ngOnInit() {

  }


}
