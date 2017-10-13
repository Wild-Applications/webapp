import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'password.template.html'
})

export class PasswordSettingsComponent implements OnInit {

  model: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService ){}

  ngOnInit() {

  }

  resetPassword(){
    alert('Save Changes not implemented');
  }
}
