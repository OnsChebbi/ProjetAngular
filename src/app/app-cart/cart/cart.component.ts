import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/core/model/CartProduct';
import { Facture } from 'src/app/core/model/Facture';
import { CartService } from 'src/app/core/services/cart-service/cart.service';
import { FactureService } from 'src/app/core/services/facture-service/facture.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [DatePipe]
})
export class CartComponent implements OnInit {
  

  constructor(private cartService:CartService,private factureService:FactureService) { 
    
  }

  cartItems:CartProduct[]=[];
  total:number;
  discount:number;


  ngOnInit(): void {

    this.cartService.cartItems.subscribe(
      (data)=>{
        this.cartItems=data
        if(this.cartItems) this.getTotal(this.cartItems);

      });
    
  };


    onDelete(i:number){
      this.cartItems.splice(i,1);
      this.cartService.setCartData(this.cartItems);
      this.getTotal(this.cartItems);
    }


    validateInput(event:any,i:number){
      const qty=+event.target.value;//+ transforms the string to number
      console.log(`qty: ${qty}`);
      
      if(qty<1){
        event.target.value= this.cartItems[i].qte;
        return;
      }
      this.QtyUpdated(qty,i);
    }
    
    private QtyUpdated(qty:number,i:number){
      this.cartItems[i].qte=qty;
      this.cartService.setCartData(this.cartItems);
      this.getTotal(this.cartItems);
    }


    getTotal(data:any){
      let sub=0;
      let disc=0;
      
      for(const item of data)
        {
          sub+=item.prixUnitaire*item.qte;
          disc+=((item.prixUnitaire*item.qte)*item.pourcentageRemise/100)
        }
        this.total=sub;
        this.discount=disc;
      
    }

    generateFacture(){
      let date=new Date()
      /*let f:Facture={
        montantRemise: 0,
        montantFacture: 0,
        dateFacture: date,
        active: true, 
      };      
      console.log(this.cartItems);
      console.log(f);
      
      this.factureService.addFactureService(1,f);
      */
    }
}