import { Injectable, Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Injectable()
export class ErrorHandler {

  cache: any = {};

  constructor ( public dialog: MatDialog) {

  }

  show(error){
    let dialogRef = this.dialog.open(ErrorDialog, {
      data: error._body
    });
    dialogRef.afterClosed().subscribe(result => {
      if(error && error.reload){
        location.reload();
      }
    });
  }
}


@Component({
  template: `
      <h3 mat-dialog-title>{{'ERRORS.DIALOG_TITLE' | translate}}</h3>
        <mat-dialog-content>
          <span>{{'ERRORS.DIALOG_CONTENT' | translate}}</span>
          <br><br>
          <span style="font-style:italic">{{error.message}}</span>
        </mat-dialog-content>
        <mat-dialog-actions class="float-right">
          <button mat-raised-button type='button' class='' (click)='dialogRef.close()'>Ok</button>
        </mat-dialog-actions>
`
})
export class ErrorDialog {
  error: any;
  constructor(public dialogRef: MatDialogRef<ErrorDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {
    if(data){
      this.error = data;
    }
  }
}
