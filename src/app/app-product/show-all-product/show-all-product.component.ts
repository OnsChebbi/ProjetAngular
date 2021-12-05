import { Component, OnInit } from '@angular/core';
import {User} from "../../core/model/user";
import {UserService} from "../../core/services/user.service";
import {Router} from "@angular/router";
import {ProductService} from "../../core/services/product.service";
import {Product} from "../../core/model/product";
import {Provider} from "../../core/model/provider";

@Component({
  selector: 'app-show-all-product',
  templateUrl: './show-all-product.component.html',
  styleUrls: ['./show-all-product.component.css']
})
export class ShowAllProductComponent implements OnInit {

  listProduct: Product[];
  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
    this.productService.getListProductService().subscribe(
      (data:Product[])=>this.listProduct=data
    )
  }
  delete(product:Product){
    let i =this.listProduct.indexOf(product);
    this.productService.deleteProductService(product.id).subscribe(
      ()=>this.listProduct.splice(i,1)
    )
  }
  ShowMore(product:Product){
    this.productService.getProductServiceById(product.id).subscribe(
      (productF:Product)=>[this.productService.modProduct(productF),this.router.navigate(['/show-product'])]
    )
  }
  update(product:Product){
    this.productService.UpdateProduct(product);
    this.router.navigate(['/add-product']);
  }



  addProduct(){
    this.router.navigate(['/add-product']);
  }
/////////


}
