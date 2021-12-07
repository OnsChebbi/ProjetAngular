import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from "../../core/model/product";
import {Provider} from "../../core/model/provider";
import {ProductService} from "../../core/services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  @Input() product:Product;
  @Output() addEvent=new EventEmitter<Product>();
  status:boolean;
  myForm:FormGroup;
  constructor(private productService:ProductService,private router: Router,private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.status=this.productService.status;
    this.myForm=new FormGroup({
      'title':new FormControl('')
    })
    if (this.productService.status){
      this.product=  this.productService.currentProduct;
    }else {
      this.product =  new Product();
    }
  }



  fixProduct(){
    this.router.navigate(['/product']);
  }
  save(){
    if (this.status){
      this.productService.updateProductService(this.product.id,this.product).subscribe(
        ()=>this.router.navigate(['/product'])
      )
    }
    else {
      this.product.nbrLike=0;

      this.productService.addProductService(this.myForm.value).subscribe(
        ()=>this.router.navigate(['/product'])
      )
    }
  }
  return(){
    this.router.navigate(['/product']);
  }

}
