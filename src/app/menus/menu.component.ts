import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MatSpinner} from '@angular/material';

import { TranslateService } from '@ngx-translate/core';
//import { TruncateModule } from 'ng2-truncate';

import { ConfirmDeleteDialog } from '../misc/index';

import { Menu, Product } from '../models/index';

import { AddProductDialog } from '../products/index';

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

  constructor(private route: ActivatedRoute, private router: Router, private menuService: MenuService, public dialog: MatDialog, private cacheService: CacheService, private productService: ProductService ){}

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
        this.saveMenu();
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
    console.log(this.contents);
    let dialogRef = this.dialog.open(ConfirmDeleteDialog, {
      data: {params: {type: "section", name: this.menu.contents[sectionIndex].title}}
    });

    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.contents.splice(sectionIndex,1);
        this.saveMenu();
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

    let dialogRef = this.dialog.open(AddDialog, {
      //width: '50%',
      panelClass: 'menu-add-product-dialog'
    });
    dialogRef.componentInstance.available = this.filterProducts(this.menu.contents[sectionIndex]);
    dialogRef.componentInstance.chosen = this.menu.contents[sectionIndex].products.slice(0);
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.menu.contents[sectionIndex].products = result.products;
        this.availableProducts = [...this.availableProducts, ...result.newProducts];
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
    this.menuService.putContents(this.menu)
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

  public model: any = {};
  public editing: boolean = false;
  public toEdit: string;

  constructor(public dialogRef: MatDialogRef<SectionDialog>, private translate: TranslateService){


  }

  ngOnInit(){
    if(typeof this.toEdit != 'undefined'){
      this.editing = true;
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
export class AddDialog implements OnInit{


  available: any[];
  chosen: any[];
  new: any[] = [];

  constructor(public dialogRef: MatDialogRef<AddDialog>, private translate: TranslateService, public dialog: MatDialog, private productService: ProductService){


  }

  ngOnInit(){
    if(typeof this.available == 'undefined'){this.available = [];}
    if(typeof this.chosen == 'undefined'){this.chosen = [];}
  }

  select(index){
    this.chosen[this.chosen.length] = this.available[index];
    this.available.splice(index,1);
  }

  remove(index){
    this.available[this.available.length] = this.chosen[index];
    this.chosen.splice(index, 1);
  }

  addNew(){
    let dialogRef = this.dialog.open(AddProductDialog, {
      width: '30%'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(typeof result != 'undefined'){

        let newProduct: Product = new Product();
        newProduct.name = result.name;
        newProduct.price = +result.price;
        newProduct.description = result.description;

        this.productService.create(newProduct)
          .subscribe(
            data => {
              newProduct._id = data._id;
              this.new[this.new.length] = newProduct;
              this.chosen = [newProduct, ...this.chosen];
            },
            error => {
              alert(error);
            }
          );

      }
    });
  }

  close( ) {
		this.dialogRef.close(undefined);
	}

  submit ( ){
    this.dialogRef.close({products: this.chosen,  newProducts: this.new});
  }
}
