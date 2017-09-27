import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';
import { AsyncPipe } from '@angular/common';

import * as moment from 'moment';
import { Observable } from 'rxjs/Rx';

import { TranslateService } from '@ngx-translate/core';

import { OrderService } from '../../services/index';

import { Order } from '../../models/index';

@Component({
  moduleId: module.id,
  templateUrl: 'pending.template.html',
  styleUrls: ['../orders.scss']
})

export class PendingComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  checkScroll(event){

  }

  orders: Order[];
  now = moment(new Date());
  Math: any;
  highlighted: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderService, public dialog: MdDialog ){}

  ngOnInit() {
    this.getOrders();
    this.Math = Math;
  }

  getOrders(){
    this.orderService.getAll()
      .subscribe(
        data => {
          this.orders = data.orders;
          for(var i=0;i<this.orders.length;i++){
            this.highlighted[i] = {left: [], right:[]};
          }
          Observable.interval(1000).subscribe(x=>{
            this.now = moment(new Date());
          })
        },
        error => {
          alert(error);
        }
      );
  }

  updateStatus(index, newStatus){
    this.orders[index].status = newStatus;
    var order: any = {};
    order._id = this.orders[index]._id;
    order.status = newStatus;
    this.orderService.put(order)
      .subscribe(data => {

      },
      error => {
        alert(error);
      });
  }
}
