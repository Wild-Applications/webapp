import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AuthenticationService, UserService } from './services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.template.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  username: string = "User";

  constructor( public authenticationService: AuthenticationService, private userService: UserService, translate: TranslateService ){
    this.userService.userChange.subscribe((user)=>{
      this.username = user.username;
    });

    translate.setDefaultLang('en');
    translate.use('en');
  }

  title = 'app';
}
