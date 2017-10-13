import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'confirm-delete-dialog',
  templateUrl: './confirmDelete.template.html'
})
export class ConfirmDeleteDialog implements OnInit {

  element: string;
  param: any = {};
  constructor(public dialogRef: MatDialogRef<ConfirmDeleteDialog>, private translate: TranslateService){

  }

  ngOnInit(){
    this.param.value = this.element;
  }

  no( ) {
		this.dialogRef.close(false);
	}

  yes ( ){
    this.dialogRef.close(true);
  }
}
