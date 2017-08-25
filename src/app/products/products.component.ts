import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MdDialog, MdDialogRef} from '@angular/material';

import { TranslateService } from '@ngx-translate/core';

import { ProductService } from '../services/index';

import { Product } from '../models/index';

@Component({
  moduleId: module.id,
  templateUrl: 'products.template.html',
  styleUrls: ['./products.scss']
})

export class ProductsComponent implements OnInit {

  products: any[];

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService, public dialog: MdDialog ){}

  ngOnInit() {
    this.getProducts()
  }

  getProducts(){
    this.productService.getAll()
      .subscribe(
        data => {
          this.products = data.products;
        },
        error => {
          alert(error);
        }
      );
  }

  openAddDialog(){
    let dialogRef = this.dialog.open(AddProductDialog);
    dialogRef.afterClosed().subscribe(result => {
      if(typeof result != 'undefined'){
        if(typeof result != 'undefined'){
          let newProduct: Product = new Product();
          newProduct.name = result.name;
          newProduct.price = +result.price;
          newProduct.description = result.description;

          this.productService.create(newProduct)
            .subscribe(
              data => {
                newProduct._id = data;
                this.products = [newProduct, ...this.products];
              },
              error => {
                alert(error);
              }
            );
        }
      }
    });
  }

}




@Component({
  selector: 'add-product-dialog',
  templateUrl: './modals/add.modal.html'
})
export class AddProductDialog {

  private model: any = {};

  constructor(public dialogRef: MdDialogRef<AddProductDialog>, private translate: TranslateService){
  }

  close( ) {
		this.dialogRef.close(undefined);
	}

  submit ( ){
    this.dialogRef.close(this.model);
  }
}
