import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService, ErrorHandler, PremisesService, OrderService } from '../services/index';

import { MatProgressSpinnerModule, MatSlideToggleModule } from '@angular/material';

@Component({
  moduleId: module.id,
  templateUrl: 'home.template.html',
  styleUrls: ['./home.scss']
})

export class HomeComponent implements OnInit {

  setup: any = {};
  validSetup: boolean = false;
  loadingSetup: boolean = true;
  setupLoadError: boolean = false;

  premises: any = {};
  premisesLoading: boolean = true;
  premisesLoadError: boolean = false;

  statistics: any = {};
  statisticsLoading: boolean = true;
  statisticsLoadError: boolean = false;
  chartLabels: string[] = [];
  chartType: string = 'bar';
  chartLegend: boolean = false;
  chartData: any[] = [{data:[], label:''}];
  chartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true,
          stepSize: 1
        },
        type: 'linear',
        position: 'left',
        id:'ordersAxis'
      },
      {
        ticks: {
          beginAtZero: true,
          stepSize: 100
        },
        type: 'linear',
        position: 'right',
        id: 'salesAxis'
      }]
    }
  };

  user: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private errorHandler: ErrorHandler, private premisesService: PremisesService, private orderService: OrderService){}

  ngOnInit() {
    this.userService.userChange.subscribe((user)=>{
      this.user = user;
    });

    this.userService.setupVerification()
      .subscribe(data => {
        this.setup = data;
        this.loadingSetup = false;
        if(data.premises && data.payment && data.menu && data.active){
          this.validSetup = true;
        }
      }, error => {
        this.loadingSetup = false;
        if((error.status>=400 && error.status < 500) || error.status == 0){
          //deal with the error
          this.setupLoadError = true;
        }
      });

    this.premisesService.get()
      .subscribe(data => {
        this.premisesLoading = false;
        this.premises = data;
      }, error => {
        this.premisesLoadError = true;
        this.premisesLoading = false;
      })

    this.orderService.getStatistics()
      .subscribe(data => {

        this.statistics = data;
        this.chartData = this.updateChartData(1);
        this.statisticsLoading = false;
      }, error => {
        if((error.status>=400 && error.status < 500) || error.status == 0){
          //deal with the error
          this.statisticsLoadError = true;
        }

        this.statisticsLoading = false;
      })
  }

  changePremisesStatus(){
    //this.premises.open = !this.premises.open;
    if(this.premises.open){
      //previously it was closes, now we want to open it
      this.premisesService.open()
        .subscribe(data => {
          //do nothing
        }, error => {
          this.premises.open = !this.premises.open;
          this.errorHandler.show(error);
        })
    }else{
      //close it
      this.premisesService.close()
        .subscribe(data => {
          //do nothing
        }, error => {
          this.premises.open = !this.premises.open;
          this.errorHandler.show(error);;
        })
    }
  }

  navTo(url){
    this.router.navigate([url]);
  }

  private updateChartData(dayOrWeek){
    //dayOrWeek   0=Daily 1=weekly

    var orders: any = {};
    var sales: any = {};
    var ordersData = [];
    var salesData = [];

    var raw = this.statistics.daily;
    if(dayOrWeek == 1){
      raw = this.statistics.weekly;
    }

    for(var i=0;i<raw.length;i++){
      ordersData[ordersData.length] = raw[i].count;
      salesData[salesData.length] = raw[i].sales;
    }

    orders.yAxisID = "ordersAxis";
    orders.data = ordersData;
    orders.label = "No. of Orders";

    sales.yAxisID = "salesAxis";
    sales.data = salesData;
    sales.label = "Total sales"


    return [orders, sales];
  }
}
