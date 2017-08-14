import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationService } from './services/authentication.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.template.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private authenticationService: AuthenticationService ){}

  title = 'app';
}
