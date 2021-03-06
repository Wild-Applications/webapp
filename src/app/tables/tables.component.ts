import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';

import { TranslateService } from '@ngx-translate/core';

import { UserService, TableService } from '../services/index';

import { ConfirmDeleteDialog } from '../misc/index';

import { Table } from '../models/table';

import QRious from 'qrious';
import JSZip from 'jszip';

@Component({
  moduleId: module.id,
  templateUrl: 'tables.template.html',
  styleUrls: ['./tables.scss']
})

export class TablesComponent implements OnInit {

  tables: any[] = [];
  loading: boolean = true;
  loadError: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, public dialog: MatDialog, private tableService: TableService ){}

  ngOnInit() {
    this.getTables();
  }

  getTables(){
    this.loadError = false;
    this.tableService.get()
      .subscribe(
        data => {
          this.loading = false;
          this.tables = data.tables;
        },
        error => {
          this.loadError = true;
          this.loading = false;
        }
      );
  }

  public downloadQrCode(index){
    var qr = new QRious({
      value: this.tables[index]._id
    });
    return (qr.toDataURL('image/png'));
  }

  public downloadAll(){
    var zip = new JSZip();

    for(var i=0; i<this.tables.length; i++){
      var qr = new QRious({
        value: this.tables[i]._id
      })
      var image = qr.toDataURL('image/png');
      zip.file(this.tables[i].name + ".png",image.substr(image.indexOf(',')+1), {base64:true});
    }
    zip.generateAsync({type:"base64"})
      .then(function (content) {
          // use content
          location.href="data:application/zip;base64,"+content;
      });



  }

  openDialog() {
    let dialogRef = this.dialog.open(AddTableDialog,{
      width: '30%'
    });
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
    let dialogRef = this.dialog.open(AddTableDialog,{
      width: '30%'
    });
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
    let dialogRef = this.dialog.open(ConfirmDeleteDialog, {
      data: {params: {type: "table", name: this.tables[index].name}}
    });
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

  public newTableName: string;
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
