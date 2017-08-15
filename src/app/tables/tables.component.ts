import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'tables.template.html',
  styleUrls: ['./tables.scss']
})

export class TablesComponent implements OnInit {

  tables: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService ){}

  ngOnInit() {
    this.getTables();
  }

  getTables(){
    //mocked call at the moment

    this.tables = [
      {name:"Table 1", _id:"1"},
      {name:"Table 2", _id:"2"},
      {name:"Table 3", _id:"3"},
      {name:"Table 4", _id:"4"},
      {name:"Table 5", _id:"5"},
      {name:"Table 6", _id:"6"},
      {name:"Table 7", _id:"7"},
      {name:"Table 8", _id:"8"}      
    ];
  }
}
