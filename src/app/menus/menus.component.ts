import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material';

import { TranslateService } from '@ngx-translate/core';
//import { TruncateModule } from 'ng2-truncate';

import { ConfirmDeleteDialog } from '../misc/index';

import { Menu } from '../models/index';

import { MenuService, CacheService } from '../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'menus.template.html',
  styleUrls: ['./menus.scss']
})

export class MenusComponent implements OnInit {

  menus: any[] = [];
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private menuService: MenuService, public dialog: MatDialog, private cacheService: CacheService ){}

  ngOnInit() {
    this.getMenus();
  }

  getMenus(){
    this.menuService.getAll()
      .subscribe(
        data => {
          this.loading = false;
          this.menus = data.menus;
        },
        error => {
          this.loading = false;
          alert(error);
        }
      );
  }

  makeActive(index){
    this.menuService.makeActive(this.menus[index]._id)
      .subscribe(
        data => {
          for(var i=0; i<this.menus.length; i++){
            this.menus[i].active = false;
          }
          this.menus[index].active = true;
        },
        error => {
          alert(error);
        }
      )
  }

  selectMenu(index) {
    this.cacheService.put(this.menus[index]._id, this.menus[index]);
    this.router.navigate(['/manage/menus/', this.menus[index]._id]);
  }

  openAddDialog(){
    let dialogRef = this.dialog.open(AddMenuDialog);
    dialogRef.afterClosed().subscribe(result => {
      if(typeof result != 'undefined'){
        let newMenu: Menu = new Menu();
        newMenu.name = result.name;

        this.menuService.create(newMenu)
          .subscribe(
            data => {
              newMenu._id = data;
              this.menus = [newMenu, ...this.menus];
            },
            error => {
              alert(error);
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
        this.menuService.delete(_id)
          .subscribe(
            data => {
              this.menus.splice(index, 1);
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
  selector: 'add-menu-dialog',
  templateUrl: './modals/add.modal.html'
})
export class AddMenuDialog {

  private model: any = {};

  constructor(public dialogRef: MatDialogRef<AddMenuDialog>, private translate: TranslateService){
  }

  close( ) {
		this.dialogRef.close(undefined);
	}

  submit ( ){
    this.dialogRef.close(this.model);
  }
}
