import { Injectable, Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Injectable()
export class ErrorHandler {

  cache: any = {};

  constructor ( public dialog: MdDialog) {

  }

  show(error){
    let dialogRef = this.dialog.open(ErrorDialog);
    dialogRef.afterClosed().subscribe(result => {
      if(error && error.reload){
        location.reload();
      }
    });
  }
}


@Component({
  template: `
      <h1 md-dialog-title>Something Went Wrong!</h1>
        <div md-dialog-content>
          We're very sorry. Looks like something went wrong! Please try again.

        </div>
        <div md-dialog-actions>
          <button md-button type='button' class='btn btn-default' (click)='dialogRef.close()'>Ok</button>
        </div>
`
})
export class ErrorDialog {
  private errorDetails;
  constructor(public dialogRef: MdDialogRef<ErrorDialog>) {

  }
}
