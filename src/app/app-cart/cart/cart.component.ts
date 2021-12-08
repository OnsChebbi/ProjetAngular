import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CartService } from 'src/app/core/services/cart-service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @ViewChildren("subTotalWrap") subTotalItems: QueryList<ElementRef>;
  @ViewChildren("subTotalWrap_existing") subTotalItems_existing: QueryList<ElementRef>;

  


  constructor(private cartService:CartService) { }

  ngOnInit(): void {

    /*items = [];

    sampleSuggestionsArray=
    */

  }

}
