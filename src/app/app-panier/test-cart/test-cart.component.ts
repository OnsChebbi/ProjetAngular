import { Component, OnInit,ElementRef,QueryList,VERSION,ViewChildren } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { PanierService } from 'src/app/core/services/panier.service';
// import { CurrencyPipe } from "@angular/common";
import {FormControl,FormGroup,Validators,FormBuilder} from "@angular/forms";
import { TestCartService } from 'src/app/core/services/test-cart.service';

@Component({
  selector: 'app-test-cart',
  templateUrl: './test-cart.component.html',
  styleUrls: ['./test-cart.component.css']
})
export class TestCartComponent implements OnInit {
  @ViewChildren("subTotalWrap") subTotalItems: QueryList<ElementRef>;
  @ViewChildren("subTotalWrap_existing") subTotalItems_existing: QueryList<ElementRef>;
  
  constructor(private cartService:TestCartService) { }

  items = [];
  sampleSuggestionsArray = [
    {
      id: "1",
      menuName: "Item 1",
      variationCost: "20.50",
      desc: "Lorem ipsum dolor sit amet..",
      qtyTotal: 0
    },
    {
      id: "2",
      menuName: "Item 2",
      variationCost: "10",
      desc: "Lorem ipsum dolor sit amet..",
      qtyTotal: 0
    },
    {
      id: "3",
      menuName: "Item 3",
      variationCost: "5.50",
      desc: "Lorem ipsum dolor sit amet..",
      qtyTotal: 0
    }
  ];

  //----- calculate total
  get total() {

    return this.items.reduce(
      (sum, x) => ({
        qtyTotal: 1,
        variationCost: sum.variationCost + x.qtyTotal * x.variationCost
      }
      ),
      { qtyTotal: 1, variationCost: 0 }//initialisation de qtyTotal et varaitioncost
    ).variationCost;
  }

  changeSubtotal(item, index) {
    const qty = item.qtyTotal;
    const amt = item.variationCost;
    const subTotal = amt * qty;
    // const subTotal_converted = this.currencyPipe.transform(subTotal, "USD");

    this.subTotalItems.toArray()[
      index
    ].nativeElement.innerHTML = subTotal;
    this.cartService.saveCart();
  }

  //----- remove specific item
  removeFromCart(item) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
  }

  //----- clear cart item
  clearCart(items) {
    // this.items.forEach((item, index) => this.cartService.removeItem(index));
    this.cartService.clearCart(items);
    this.items = [...this.cartService.getItems()];
  }

  //----- add item to cart
  addToCart(item) {
    if (!this.cartService.itemInCart(item)) {
      item.qtyTotal = 1;
      this.cartService.addToCart(item); //add items in cart
      this.items = [...this.cartService.getItems()];
    }else 
    {
      let selectedItem=this.items.find((p)=>p.id===item.id);
      selectedItem.qtyTotal+=1;
      this.items = [...this.cartService.getItems()];

      this.changeSubtotal(selectedItem,this.items.findIndex((p)=>p.id===selectedItem.id))

    }
  }

  ngOnInit(): void {
    this.cartService.loadCart();
    this.items = this.cartService.getItems();
  }

}
