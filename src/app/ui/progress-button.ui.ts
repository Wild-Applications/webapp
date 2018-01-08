// ./app/shared/hidden.directive.ts
import { Directive, ElementRef, Renderer, Input, ComponentFactoryResolver } from '@angular/core';

import { MatSpinner } from '@angular/material';
// Directive decorator
@Directive({
  selector: 'button[loading]'
})
export class TabProgressButton {
  constructor(public el: ElementRef, public renderer: Renderer) {
  }

  @Input() loading: boolean;
  validEl: boolean = false;

  ngOnInit(){
    if(this.el.nativeElement.childNodes[0].tagName == 'SPAN'){
      //
      if(this.el.nativeElement.childNodes[0].className.indexOf("mat-button-wrapper") >= 0){
        //this will work now
        if(this.el.nativeElement.childNodes[0].childNodes[1] && this.el.nativeElement.childNodes[0].childNodes[1].tagName == "MAT-SPINNER"){
          this.validEl = true;
          this.el.nativeElement.childNodes[0].childNodes[1].style['margin-left'] = '12px';
          this.changes();
        }else{
          console.warn("Element needs to contain a mat-spinner");
        }
      }else{
        console.warn("Element needs to be a mat-button");
      }
    }else{
      console.warn("Element needs to be a mat-button");
    }
  }

  ngAfterViewInit(){
    this.changes();
  }


  ngOnChanges(){
    this.changes();
  }

  changes(){
    if(this.validEl){
      if(!this.loading){
        this.el.nativeElement.childNodes[0].childNodes[1].style.display = 'none';
      }else{
        this.el.nativeElement.childNodes[0].childNodes[1].style.display = 'inline-block';
      }
    }
  }
}
