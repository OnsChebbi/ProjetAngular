import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/core/model/produit';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor() { }

  panier:Produit[];
  ngOnInit(): void {
    console.log(localStorage);

  }

}
