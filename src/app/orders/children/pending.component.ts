import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AsyncPipe } from '@angular/common';
import { trigger, state, style, animate, transition, sequence } from '@angular/animations';

import * as moment from 'moment';
import { Observable } from 'rxjs/Rx';

import { TranslateService } from '@ngx-translate/core';

import { OrderService, ErrorHandler } from '../../services/index';

import { Order } from '../../models/index';

@Component({
  moduleId: module.id,
  templateUrl: 'pending.template.html',
  styleUrls: ['../orders.scss'],
  animations: [
     trigger('anim', [
        transition('* => void', [
          style({ height: '*', opacity: '1', transform: 'translateX(0)', 'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.3)'}),
          sequence([
            animate(".25s ease", style({ height: '*', opacity: '.2', transform: 'translateX(20px)', 'box-shadow': 'none'  })),
            animate(".1s ease", style({ height: '0', opacity: 0, transform: 'translateX(20px)', 'box-shadow': 'none'  }))
          ])
        ]),
        transition('void => active', [
          style({ height: '0', opacity: '0', transform: 'translateX(20px)', 'box-shadow': 'none' }),
          sequence([
            animate(".1s ease", style({ height: '*', opacity: '.2', transform: 'translateX(20px)', 'box-shadow': 'none'  })),
            animate(".35s ease", style({ height: '*', opacity: 1, transform: 'translateX(0)', 'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.3)'  }))
          ])
        ])
    ])
  ]
})

export class PendingComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  checkScroll(event){

  }

  orders: Order[];
  now = moment(new Date());
  Math: any;
  highlighted: any[] = [];
  loading: boolean = true;
  inFlight: boolean = false;
  lastCallTime: any = moment(new Date()).subtract(3,'months');
  audio: any = new Audio();

  private orderCall: any;

  completedMarkers: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderService, public dialog: MatDialog, private errorHandler: ErrorHandler ){}

  ngOnInit() {
    this.orderCall = Observable.interval(30000).subscribe(x=>{
      this.getOrders();
    })
    this.getOrders();
    this.Math = Math;

    this.audio.src = "../../../assets/sounds/new_order.mp3";
    this.audio.load();


    this.getCompletedMarkers();
  }

  ngOnDestroy(){
    this.orderCall.unsubscribe();
  }

  getOrders(){
    if(this.inFlight){
      //dont do anything otherwise we will send multiple requests at once;
    }else{
      this.inFlight = true;
      this.orderService.getPending()
        .subscribe(
          data => {
            this.inFlight = false;
            this.loading = false;
            this.orders = data.orders;



            var hasNewOrder = false;
            var newCompletedMarkers = {};

            for(var i=0;i<this.orders.length;i++){
              this.highlighted[i] = {left: [], right:[]};
              if(!this.completedMarkers[this.orders[i]._id]){
                this.completedMarkers[this.orders[i]._id] = {};
              }
              newCompletedMarkers[this.orders[i]._id] = this.completedMarkers[this.orders[i]._id];

              //need to look at createdAt time to check if it is after the last call time;
              var orderCreatedAt = moment(this.orders[i].createdAt);
              if(orderCreatedAt.isAfter(this.lastCallTime)){
                hasNewOrder = true;
              }
            }

            //removing any completed marker entries that no longer exist.
            this.completedMarkers = newCompletedMarkers;

            if(hasNewOrder){
              console.log('new orders to display');
              this.audio.play();
            }
            Observable.interval(1000).subscribe(x=>{
              this.now = moment(new Date());
            });

            this.lastCallTime = moment(new Date());
          },
          error => {
            this.inFlight = false;
            this.loading = false;
            this.errorHandler.show(error);
            console.log(error);
          }
        );
    }
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
        this.getOrders();
      });
  }

  cancelOrder(index){
    this.orderService.cancel(this.orders[index]._id)
      .subscribe(() => {
        this.orders.splice(index, 1);
        delete this.completedMarkers[this.orders[index]._id];
      }, error => {
        this.getOrders();
      })
  }

  complete(index){
    this.orderService.complete(this.orders[index])
      .subscribe(data => {
        this.orders[index].status = "COMPLETE";
        setTimeout(() => {
          delete this.completedMarkers[this.orders[index]._id];
          this.orders.splice(index, 1);
        }, 2000);
      },
      error => {
        this.getOrders();
      })
  }

  public trackByFn(index, order){
    return order._id;
  }

  public markComplete(order, index){
    this.completedMarkers[order._id][index] = !this.completedMarkers[order._id][index];
    this.writeCompletedToDisk();
  }

  private writeCompletedToDisk(){
    localStorage.setItem('order_status', JSON.stringify(this.completedMarkers));
  }

  private getCompletedMarkers(){
    var retrieved = localStorage.getItem('order_status');
    if(retrieved && typeof retrieved == "string") {
      retrieved = JSON.parse(retrieved);
      this.completedMarkers = retrieved;
    }
  }
}
