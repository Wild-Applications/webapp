import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MdDialog, MdDialogRef} from '@angular/material';

import { TranslateService } from '@ngx-translate/core';

import { UserService } from '../services/index';


@Component({
  moduleId: module.id,
  templateUrl: 'products.template.html',
  styleUrls: ['./products.scss']
})

export class ProductsComponent implements OnInit {

  products: any[];

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, public dialog: MdDialog ){}

  ngOnInit() {
    this.products = this.getProducts()
  }

  getProducts(){
    return [
      {name: "Vodka Coke", price: '1.50', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum nibh eget erat lobortis, nec rutrum sem finibus. Proin sollicitudin dictum rhoncus. Donec et malesuada augue. Fusce tempus luctus enim."}
    ]
  }

  openAddDialog(){
    let dialogRef = this.dialog.open(AddProductDialog);
    dialogRef.afterClosed().subscribe(result => {
      if(typeof result != 'undefined'){
        var newProducts = [result,...this.products];
        this.products = newProducts;
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
