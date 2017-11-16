import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable, Subscription } from 'rxjs/Rx';
import * as moment from 'moment';
moment.locale('en');


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
  currentRequest: Subscription;
  loadingOrders: boolean = true;

  selectedDay: any = {};
  breakdown: any[] = [];
  today = new Date();
  max: Date = new Date();
  min: Date;


  selected: Date = new Date();
  canSelectNext: boolean = true;
  canSelectPrevious: boolean = true;

  private orderCall: any;

  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderService, public dialog: MatDialog ){}

  ngOnInit() {
    this.getOrderBreakdown();
    this.orderCall = Observable.interval(30000).subscribe(x=>{
      this.getOrders(false);
    });
    this.Math = Math;
  }

  dateChanged(date){
    this.getOrders(true);
    this.canNextOrPreviousDay();
  }

  canNextOrPreviousDay(){
    const day = this.selected.getDate();
    const month = this.selected.getMonth();
    const year = this.selected.getFullYear();
    var canNext = false;
    var canPrev = false;

    for(var i=0;i<this.breakdown.length;i++){
      var nextBreakdown = this.breakdown[i]._id;
      if(nextBreakdown.year < year){
        canPrev = true;
      }else if(nextBreakdown.year == year){
        //check month next
        if(nextBreakdown.month < month){
          canPrev = true;
        }else if(nextBreakdown.month == month){
          //check day
          if(nextBreakdown.day < day){
            canPrev = true;
          }else if(nextBreakdown.day == day){
            canPrev = true;
            canNext =true;
          }else{
            canNext = true;
          }
        }else{
          canNext = true;
        }
      }else{
        //breakdown year is greater than selected year
        canNext = true;
      }
    }
    this.canSelectNext = canNext;
    this.canSelectPrevious = canPrev;
  }

  nextDay(){
    const day = this.selected.getDate();
    const month = this.selected.getMonth();
    const year = this.selected.getFullYear();
    for(var i=0; i<this.breakdown.length; i++){
      var nextBreakdown = this.breakdown[i]._id;
      if(nextBreakdown.year == year && nextBreakdown.month == month && nextBreakdown.day == day){
        var nextDate = new Date(this.breakdown[i-1]._id.year + "/" + (this.breakdown[i-1]._id.month+1) + "/" + this.breakdown[i-1]._id.day);
        this.selected = nextDate;
        this.getOrders(true);
      }
    }
  }

  previousDay(){
    const day = this.selected.getDate();
    const month = this.selected.getMonth();
    const year = this.selected.getFullYear();
    for(var i=0; i<this.breakdown.length; i++){
      var nextBreakdown = this.breakdown[i]._id;
      if(nextBreakdown.year == year && nextBreakdown.month == month && nextBreakdown.day == day){
        var nextDate = new Date(this.breakdown[i+1]._id.year + "/" + (this.breakdown[i+1]._id.month+1) + "/" + this.breakdown[i+1]._id.day);
        this.selected = nextDate;
        this.getOrders(true);
      }
    }
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    for(var i=0; i<this.breakdown.length; i++){
      var nextBreakdown = this.breakdown[i];
      if(nextBreakdown._id.year == year && nextBreakdown._id.month == month && nextBreakdown._id.day == day){
        return true;
      }
    }
    return false;
    // Prevent Saturday and Sunday from being selected.
  }

  ngOnDestroy(){
    this.orderCall.unsubscribe();
  }

  getOrderBreakdown(){
    this.loading = true;
    this.orderService.getOrderBreakdown()
      .subscribe((data) =>{
        this.breakdown = data.breakdown;
        this.selected = new Date(this.breakdown[this.breakdown.length - 1]._id.year + "/" + (this.breakdown[this.breakdown.length - 1]._id.month+1) + "/" + this.breakdown[this.breakdown.length - 1]._id.day);
        this.canNextOrPreviousDay();
        this.getOrders(true);
        this.loading = false;
      }, error => {
        this.loading = false;
      })
  }

  getOrders(override){
    //if override and , do a new request
    //if inFlight dont do on
    if(override || !this.inFlight){
      this.loadingOrders = true;
      if(this.currentRequest){
          this.currentRequest.unsubscribe();
      }
      var dateToUse = new Date();
      if(this.selected){
        dateToUse = this.selected;
      }
      var year = dateToUse.getFullYear();
      var month = dateToUse.getMonth();
      var day = dateToUse.getDate();
      this.inFlight = true;
      this.currentRequest = this.orderService.getCompleteByDay(year, month, day)
        .subscribe(
          data => {
            this.inFlight = false;
            this.loadingOrders = false;
            this.orders = data.orders;
            for(var i=0;i<this.orders.length;i++){
              this.highlighted[i] = {left: [], right:[]};
            }
          },
          error => {
            this.inFlight = false;
            this.loadingOrders = false;
            alert(error);
          }
        );
    }else{

    }
  }
}
