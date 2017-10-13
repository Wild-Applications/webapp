import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';

import { TranslateService } from '@ngx-translate/core';

import { UserService, TableService } from '../services/index';

import { ConfirmDeleteDialog } from '../misc/index';

import { Table } from '../models/table';

@Component({
  moduleId: module.id,
  templateUrl: 'tables.template.html',
  styleUrls: ['./tables.scss']
})

export class TablesComponent implements OnInit {

  tables: any[] = [];
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, public dialog: MatDialog, private tableService: TableService ){}

  ngOnInit() {
    this.getTables();
  }

  getTables(){
    //mocked call at the moment

    this.tableService.get()
      .subscribe(
        data => {
          this.loading = false;
          this.tables = data.tables;
        },
        error => {
          this.loading = false;
          alert(error);
        }
      );
  }

  openDialog() {
    let dialogRef = this.dialog.open(AddTableDialog);
    dialogRef.afterClosed().subscribe(result => {
      if(typeof result != 'undefined'){
        let newTable: Table = new Table();
        newTable.name = result;

        this.tableService.create(newTable)
          .subscribe(
            data => {
              newTable._id = data;
              this.tables = [newTable, ...this.tables];
            },
            error => {
              alert(error);
            }
          );
      }
    });
  }


  editDialog(index){
    let dialogRef = this.dialog.open(AddTableDialog);
    dialogRef.componentInstance.toEdit = this.tables[index].name;
    dialogRef.afterClosed().subscribe(result => {
      if(typeof result != 'undefined'){
        var oldTable = this.tables[index];
        var tableToEdit = this.tables[index];
        tableToEdit.name = result;

        this.tableService.put(tableToEdit)
          .subscribe(
            data => {
              //saved
            },
            error => {
              this.tables[index] = oldTable;
              alert('Table Update Failed');
            }
          );
      }
    });
  }

  deleteConfirmation(_id, index){
    let dialogRef = this.dialog.open(ConfirmDeleteDialog);
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        //delete it
        this.tableService.delete(_id)
          .subscribe(
            data => {
              this.tables.splice(index, 1);
            },
            error => {
              alert(error);
            }
          );
      }else{
        //keep it
      }
    })
  }
}



@Component({
  selector: 'add-table-dialog',
  templateUrl: './modals/addTable.modal.html'
})
export class AddTableDialog implements OnInit{

  private newTableName: string;
  public toEdit: string;

  constructor(public dialogRef: MatDialogRef<AddTableDialog>, private translate: TranslateService){
    //Placeholder text so users don't have to type table every time
    this.translate.get('MANAGE.TABLES.TABLE').subscribe(
      (res: string) => {
        this.newTableName = res + " ";
      }
    );

  }

  ngOnInit(){
    if(typeof this.toEdit != 'undefined'){
      this.newTableName = this.toEdit;
    }
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

  constructor(public dialogRef: MatDialogRef<EditTableDialog>){

  }

  close( ) {
		this.dialogRef.close(undefined);
	}

  submit ( ){
    this.dialogRef.close(this.existingTableName);
  }
}
