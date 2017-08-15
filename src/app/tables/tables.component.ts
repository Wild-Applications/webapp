import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'tables.template.html'
})

export class TablesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService ){}

  ngOnInit() {

  }
}
