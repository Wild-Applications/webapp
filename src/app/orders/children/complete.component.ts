import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import { TranslateService } from '@ngx-translate/core';

import { OrderService } from '../../services/index';

import { Order } from '../../models/index';

@Component({
  moduleId: module.id,
  templateUrl: 'complete.template.html',
  styleUrls: ['../orders.scss']
})

export class CompleteComponent implements OnInit {

  orders: Order[];
  Math: any;
  highlighted: any[] = [];
  loading: boolean = true;
  inFlight: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderService, public dialog: MdDialog ){}

  ngOnInit() {
    Observable.interval(30000).subscribe(x=>{
      this.getOrders();
    })
    this.getOrders();
    this.Math = Math;
  }

  getOrders(){
    if(this.inFlight){
      //dont do anything otherwise we will send multiple requests at once;
    }else{
      this.inFlight = true;
      this.orderService.getComplete()
        .subscribe(
          data => {
            this.inFlight = false;
            this.loading = false;
            this.orders = data.orders;
            for(var i=0;i<this.orders.length;i++){
              this.highlighted[i] = {left: [], right:[]};
            }
          },
          error => {
            this.inFlight = false;
            this.loading = false;
            alert(error);
          }
        );
    }
  }
}
