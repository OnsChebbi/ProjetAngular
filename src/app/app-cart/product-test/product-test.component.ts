import { Component,OnInit} from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { ProductService } from 'src/app/core/services/product.service';


@Component({
  selector: 'app-product-test',
  templateUrl: './product-test.component.html',
  styleUrls: ['./product-test.component.css']
})
export class ProductTestComponent implements OnInit {


  listProducts:Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getListProductService().subscribe(
      (data:Product[])=>this.listProducts=data
    )  
  }
  
}
