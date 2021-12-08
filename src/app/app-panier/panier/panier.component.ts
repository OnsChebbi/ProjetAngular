import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/product';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor() { }

  panier:Product[];
  ngOnInit(): void {
    console.log(localStorage);
    
  }

}
