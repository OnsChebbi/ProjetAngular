import { Component, OnInit } from '@angular/core';
import { Panier } from 'src/app/core/model/Panier';
import { PanierService } from 'src/app/core/services/panier.service';

@Component({
  selector: 'app-main-panier',
  templateUrl: './main-panier.component.html',
  styleUrls: ['./main-panier.component.css']
})
export class MainPanierComponent implements OnInit {

  constructor(private servicePanier: PanierService) { }
  listPanier: Panier[];


  ngOnInit(): void {
    
    this.servicePanier.getListPanierService().subscribe(
      (data: Panier[]) => {
        this.listPanier= data
      }
    )
  }

  deletePanier(panier : Panier): void{
    
    
    console.log(panier);
    console.log(this.listPanier);
    
    
    this.servicePanier.deletePanierService(panier.idPanier);
    let i = this.listPanier.indexOf(panier);
    console.log(i);
    this.servicePanier.deletePanierService(panier.idPanier).subscribe(
      ()=>this.listPanier.splice(i,1)
      )
    
  }

  detailPanier(panier:Panier):void{
    console.log(panier.u);
    

  }

}
