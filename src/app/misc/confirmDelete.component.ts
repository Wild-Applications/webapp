import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatButtonModule} from '@angular/material';

import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'confirm-delete-dialog',
  templateUrl: './confirmDelete.template.html'
})
export class ConfirmDeleteDialog implements OnInit {

  params: any = {};
  constructor(public dialogRef: MatDialogRef<ConfirmDeleteDialog>, private translate: TranslateService, @Inject(MAT_DIALOG_DATA) public data: any){
    if(data && data.params){
      this.params = data.params;
    }
  }

  ngOnInit(){
  }

  no( ) {
		this.dialogRef.close(false);
	}

  yes ( ){
    this.dialogRef.close(true);
  }
}
