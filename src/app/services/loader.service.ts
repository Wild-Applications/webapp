import { Injectable, Component } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';

@Injectable()
export class LoadHandler {

  cache: any = {};
  snackBarRef: MatSnackBarRef<SimpleSnackBar>;

  constructor ( public snackBar: MatSnackBar ) {

  }

  start(){
    this.snackBarRef = this.snackBar.open("Loading...");
  }

  show(message: string){
    this.snackBar.open(message, undefined, {
      duration: 1000
    });
  }

  finish(){
    if(this.snackBarRef){
      this.snackBarRef.dismiss();
    }
  }
}
