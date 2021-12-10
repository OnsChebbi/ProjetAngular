import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartProduct } from 'src/app/core/model/CartProduct';
import { Product } from 'src/app/core/model/product';
import { CartService } from 'src/app/core/services/cart-service/cart.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-detail-test',
  templateUrl: './product-detail-test.component.html',
  styleUrls: ['./product-detail-test.component.css']
})
export class ProductDetailTestComponent implements OnInit {

  constructor(private productService: ProductService,private activated:ActivatedRoute,private cartService:CartService) { }

  cartProduct:CartProduct;
  product:Product;

  ngOnInit(): void {
     this.activated.paramMap.subscribe(
      (params)=> {
        let id = params.get('id');
        this.productService.getSingleProduct(Number(id)).subscribe(
          (data:CartProduct)=>{
              this.cartProduct=data
              this.cartProduct.qte=0;
            }
        )    
      }
    )
    
   
  }
  addToCart(cp:CartProduct){
    this.cartService.addItem(cp);
  }



}
