import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MdDialog, MdDialogRef} from '@angular/material';

import { TranslateService } from '@ngx-translate/core';

import { UserService } from '../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'tables.template.html',
  styleUrls: ['./tables.scss']
})

export class TablesComponent implements OnInit {

  tables: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, public dialog: MdDialog ){}

  ngOnInit() {
    this.getTables();
  }

  getTables(){
    //mocked call at the moment

    this.tables = [
      {name:"Table 1", _id:"1"},
      {name:"Table 2", _id:"2"},
      {name:"Table 3", _id:"3"},
      {name:"Table 4", _id:"4"},
      {name:"Table 5", _id:"5"},
      {name:"Table 6", _id:"6"},
      {name:"Table 7", _id:"7"},
      {name:"Table 8", _id:"8"}
    ];
  }

  openDialog() {
    let dialogRef = this.dialog.open(AddTableDialog);
    dialogRef.afterClosed().subscribe(result => {
      if(typeof result != 'undefined'){
        var newTables = [{name:result, _id:result},...this.tables];
        this.tables = newTables;
      }
    });
  }
}



@Component({
  selector: 'add-table-dialog',
  templateUrl: './modals/addTable.modal.html'
})
export class AddTableDialog {

  private newTableName: string;

  constructor(public dialogRef: MdDialogRef<AddTableDialog>, private translate: TranslateService){
    //Placeholder text so users don't have to type table every time
    this.translate.get('MANAGE.TABLES.TABLE').subscribe(
      (res: string) => {
        this.newTableName = res + " ";
      }
    );
  }

  close( ) {
		this.dialogRef.close(undefined);
	}

  submit ( ){
    this.dialogRef.close(this.newTableName);
  }
}

@Component({
  selector: 'edit-table-dialog',
  templateUrl: './modals/addTable.modal.html'
})
export class EditTableDialog{
  private existingTableName: string;

  constructor(public dialogRef: MdDialogRef<EditTableDialog>){

  }

  close( ) {
		this.dialogRef.close(undefined);
	}

  submit ( ){
    this.dialogRef.close(this.existingTableName);
  }
}
