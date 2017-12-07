import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

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
    let dialogRef = this.dialog.open(MenuDialog, {
      width: '20%'
    });
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

  deleteConfirmation(index, event){
    event.stopPropagation();
    let dialogRef = this.dialog.open(ConfirmDeleteDialog);
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        //delete it
        this.menuService.delete(this.menus[index]._id)
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

  editMenu(index, event){
    event.stopPropagation();
    let dialogRef = this.dialog.open(MenuDialog, {
      width: '20%',
      data: this.menus[index]
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.menuService.put(result)
          .subscribe(data => {
            this.menus[index] = result;
          }, error => {
            alert(error);
          });
      }
    })
  }
}

@Component({
  selector: 'add-menu-dialog',
  templateUrl: './modals/addMenu.modal.html'
})
export class MenuDialog {

  public model: any = {};
  private toEdit: any = {};
  public update: boolean = false;

  constructor(public dialogRef: MatDialogRef<MenuDialog>, private translate: TranslateService, @Inject(MAT_DIALOG_DATA) public data: any){
    if(data){
      this.model = data;
      this.update = true;
    }
  }

  close( ) {
		this.dialogRef.close(undefined);
	}

  submit ( ){
    this.dialogRef.close(this.model);
  }
}
