import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MatFormFieldModule, MAT_DIALOG_DATA } from '@angular/material';

import { TranslateService } from '@ngx-translate/core';

import { ProductService } from '../services/index';

import { ConfirmDeleteDialog } from '../misc/index';

import { Product } from '../models/index';

@Component({
  moduleId: module.id,
  templateUrl: 'products.template.html',
  styleUrls: ['./products.scss']
})

export class ProductsComponent implements OnInit {

  products: any[];
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService, public dialog: MatDialog ){}

  ngOnInit() {
    this.getProducts()
  }

  getProducts(){
    this.productService.getAll()
      .subscribe(
        data => {
          this.loading = false;
          this.products = data.products;
        },
        error => {
          this.loading = false;
          alert(error);
        }
      );
  }

  openAddDialog(){
    let dialogRef = this.dialog.open(AddProductDialog, {
      width: '30%'
    });
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
                newProduct._id = data._id;
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

  openEditDialog(index){
    let dialogRef = this.dialog.open(AddProductDialog, {
      width: '30%',
      data: {
        product: this.products[index]
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(typeof result != undefined){
        this.productService.put(result)
          .subscribe(
            data => {
              this.products[index] = result;
            },
            error => {
              alert(error);
            }
          )
      }
    })
  }

  deleteConfirmation(index){
    let dialogRef = this.dialog.open(ConfirmDeleteDialog);
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        //delete it
        this.productService.delete(this.products[index]._id)
          .subscribe(
            data => {
              this.products.splice(index, 1);
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

  toggleStockStatus(index){
    this.products[index].in_stock = !this.products[index].in_stock;
    this.productService.put(this.products[index])
      .subscribe((data) => {

      }, error => {
        this.products[index].in_stock = !this.products[index].in_stock;
        console.log(error);
      })
  }

  toggleAgeRestriction(index){
    this.products[index].age_restricted = !this.products[index].age_restricted;
    this.productService.put(this.products[index])
      .subscribe((data) => {

      }, error => {
        this.products[index].age_restricted = !this.products[index].age_restricted;
        console.log(error);
      })
  }

}




@Component({
  selector: 'add-product-dialog',
  templateUrl: './modals/add.modal.html',
  styleUrls: ['./products.scss']
})
export class AddProductDialog {

  public model: any = {};
  public update: boolean = false;

  constructor(public dialogRef: MatDialogRef<AddProductDialog>, private translate: TranslateService,  @Inject(MAT_DIALOG_DATA) public data: any){
    if(data && data.product){
      this.update = true;
      this.model = data.product;
    }else{
      this.model.price = 0;
    }
  }

  checkPrice(){
    if(this.model.price < 0){
      this.model.price = 0;
    }
  }

  close( ) {
		this.dialogRef.close(undefined);
	}

  submit ( ){
    this.dialogRef.close(this.model);
  }
}
