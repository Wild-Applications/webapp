import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MdDialog, MdDialogRef, MdSpinner} from '@angular/material';

import { TranslateService } from '@ngx-translate/core';
//import { TruncateModule } from 'ng2-truncate';

import { ConfirmDeleteDialog } from '../misc/index';

import { Menu } from '../models/index';

import { MenuService, CacheService, ProductService } from '../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'menu.template.html',
  styleUrls: ['./menus.scss']
})

export class MenuComponent implements OnInit {

  menu: any = {};
  contents: any[] = [];
  private sub: any;
  loading: boolean = true;

  availableProducts: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private menuService: MenuService, public dialog: MdDialog, private cacheService: CacheService, private productService: ProductService ){}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.menuService.get(params.id)
        .subscribe(
          data => {
            this.menu = data;
            this.loading = false;
          },
          error => {
            //this.loading = false;
            alert(error);
            this.loading = false;
          }
        );
    });

    this.getAvailableProducts();
  }

  getAvailableProducts(){
    this.productService.getAll()
      .subscribe(
        data => {
          this.availableProducts = data.products;
        },
        error => {
          alert(error);
        }
      );
  }

  filterProducts(section){
    var choosableProducts = this.availableProducts.filter(function(product){
      var keep = true;
      section.products.forEach(function(containedProduct){
        if(containedProduct._id == product._id){
          keep = false;
        }
      })
      return keep;
    })
    return choosableProducts;
  }

  openAddSectionDialog(){
    let dialogRef = this.dialog.open(SectionDialog);
    dialogRef.afterClosed().subscribe(result => {
      if(typeof result != 'undefined'){
        this.menu.contents[this.menu.contents.length] = {title:result.name, products:[]}
        this.menuService.put(this.menu)
          .subscribe(
            data => {

            },
            error => {
              alert(error);
            }
          );
          /*let newSection: any = {};
          newSection.title = result;
          newSection.products = [];
          this.contents[this.contents.length] = newSection;*/
      }
    });
  }

  move(up, sectionIndex){
    var section = this.menu.contents[sectionIndex];
    this.menu.contents.splice(sectionIndex, 1);
    if(up){
      this.menu.contents.splice(sectionIndex - 1, 0, section);
    }else{
      //down
      this.menu.contents.splice(sectionIndex + 1, 0, section);
    }
  }

  deleteSection(sectionIndex){
    let dialogRef = this.dialog.open(ConfirmDeleteDialog);
    dialogRef.componentInstance.element = "section " + this.contents[sectionIndex].title;
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.contents.splice(sectionIndex,1);
      }else{
        //keep it
      }
    })
  }

  removeProduct(sectionIndex, productIndex){
    this.menu.contents[sectionIndex].products.splice(productIndex, 1);
    this.saveMenu();
  }

  addProductDialog(sectionIndex){

    let dialogRef = this.dialog.open(AddProductDialog);
    dialogRef.componentInstance.available = this.filterProducts(this.menu.contents[sectionIndex]);
    dialogRef.componentInstance.chosen = this.menu.contents[sectionIndex].products.slice(0);
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.menu.contents[sectionIndex].products = result;
        this.saveMenu();
      }
    })
  }

  editSection(sectionIndex){
    let dialogRef = this.dialog.open(SectionDialog);
    dialogRef.componentInstance.toEdit = this.menu.contents[sectionIndex].title;
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.menu.contents[sectionIndex].title = result.name;
        this.saveMenu();
      }
    });
  }

  saveMenu(){
    this.menuService.put(this.menu)
      .subscribe(
        data => {

        }, error => {
          alert(error);
        }
      )
  }

}

@Component({
  selector: 'add-section-dialog',
  templateUrl: './modals/add.modal.html'
})
export class SectionDialog implements OnInit{

  private model: any = {};
  public toEdit: string;

  constructor(public dialogRef: MdDialogRef<SectionDialog>, private translate: TranslateService){


  }

  ngOnInit(){
    if(typeof this.toEdit != 'undefined'){
      this.model.name = this.toEdit;
    }
  }

  close( ) {
		this.dialogRef.close(undefined);
	}

  submit ( ){
    this.dialogRef.close(this.model);
  }
}


@Component({
  selector: 'add-product-dialog',
  templateUrl: './modals/addProduct.modal.html',
  styleUrls: ['./menus.scss']
})
export class AddProductDialog implements OnInit{


  available: any[];
  chosen: any[];

  constructor(public dialogRef: MdDialogRef<SectionDialog>, private translate: TranslateService){


  }

  ngOnInit(){
    if(typeof this.available == 'undefined'){this.available = [];}
    if(typeof this.chosen == 'undefined'){this.chosen = [];}
  }

  chooseProduct(index){
    if(index > -1){
      this.chosen[this.chosen.length] = this.available[index];
      this.available.splice(index, 1);
    }
  }

  removeProduct(index){
    if(index > -1){
      this.available[this.available.length] = this.chosen[index];
      this.chosen.splice(index, 1);
    }
  }

  close( ) {
		this.dialogRef.close(undefined);
	}

  submit ( ){
    this.dialogRef.close(this.chosen);
  }
}
