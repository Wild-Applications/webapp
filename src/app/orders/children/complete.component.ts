import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';

import { TranslateService } from '@ngx-translate/core';

import { OrderService } from '../../services/index';

import { Order } from '../../models/index';

@Component({
  moduleId: module.id,
  templateUrl: 'complete.template.html',
  styleUrls: ['../orders.scss']
})

export class CompleteComponent implements OnInit {

  orders: any[];

  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderService, public dialog: MdDialog ){}

  ngOnInit() {
    this.getOrders()
  }

  getOrders(){
    this.orderService.getAll()
      .subscribe(
        data => {
          this.orders = data.orders;
        },
        error => {
          alert(error);
        }
      );
  }
}
