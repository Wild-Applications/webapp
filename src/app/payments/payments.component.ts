import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { TranslateService } from '@ngx-translate/core';

import { UserService, PaymentsService } from '../services/index';



@Component({
  moduleId: module.id,
  templateUrl: 'payments.template.html',
  styleUrls: ['./payments.scss']
})

export class PaymentsComponent implements OnInit {

  tables: any[] = [];
  clientId: string = "ca_BNy5AOnoJYsR3lfXeO6mmIqVMIy4D469";
  private params: any;
  connected: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, public dialog: MdDialog, private paymentsService: PaymentsService ){}

  ngOnInit() {
    this.params = this.route.queryParams.subscribe((params: Params) => {
       if(typeof params['state'] != 'undefined'){

       }

       if(typeof params['error'] != 'undefined'){
         //something went wrong when the user was connecting their stripe account
         console.log(params['error_description']);
       }else{
         //no error, was this a redirect from stripe or was it a simple navigation from within our app?

         if(typeof params['scope'] != 'undefined' && typeof params['code'] != 'undefined' && typeof params['state'] != 'undefined'){
           //this was a redirect
           this.connected = true;
           if(this.paymentsService.verifyState(params['state'])){
             //state checks out so continue to load
             this.paymentsService.passAccessToken(params['code'])
               .subscribe(
                 data => {
                   alert(data);
                 },
                 error => {
                   alert(error);
                 }
               );
           }else{
             alert('states did not match, potential CSRF attack');
           }
         }
       }
    });
  }

  ngOnDestroy() {
    this.params.unsubscribe();
  }

  initialiseConnect(){
    this.paymentsService.initialiseConnection();
  }
}
