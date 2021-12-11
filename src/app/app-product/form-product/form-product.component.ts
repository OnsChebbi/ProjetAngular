import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Produit} from "../../core/model/produit";
import {Provider} from "../../core/model/provider";
import {ProduitService} from "../../core/services/produit.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../core/model/user";
import {UserService} from "../../core/services/user.service";

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
 /* @Input() product:Produit;
  @Output() addEvent=new EventEmitter<Produit>();
  status:boolean;
  myForm:FormGroup;*/
  produit: Produit=new Produit();
  constructor(private productService:ProduitService, private router: Router, private activated:ActivatedRoute) { }



  ngOnInit(): void {
    //this.status=this.userService.status;
    this.activated.paramMap.subscribe(
      (params)=> {
        let id = params.get('id');
        this.productService.getProductServiceById(id).subscribe(
          (data) => this.produit = data
        )
      }
    )
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












