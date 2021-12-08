import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { TestCartService } from 'src/app/core/services/test-cart.service';

@Component({
  selector: 'app-test-product',
  templateUrl: './test-product.component.html',
  styleUrls: ['./test-product.component.css']
})
export class TestProductComponent implements OnInit {

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
  
 


  addToCart(item) {
    if (!this.cartService.itemInCart(item)) {
      item.qtyTotal = 1;
      this.cartService.addToCart(item); //add items in cart
      this.items = [...this.cartService.getItems()];
    }/*else 
    {
      let selectedItem=this.items.find((p)=>p.id===item.id);
      selectedItem.qtyTotal+=1;
      this.items = [...this.cartService.getItems()];

      this.changeSubtotal(selectedItem,this.items.findIndex((p)=>p.id===selectedItem.id))

    }*/
  }



  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  
  
  
}
