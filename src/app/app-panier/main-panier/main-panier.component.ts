import { Component, OnInit } from '@angular/core';
import { Panier } from 'src/app/core/model/Panier';
import { PanierService } from 'src/app/core/services/panier.service';
import swal from "sweetalert";

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

  // deletePanier(panier : Panier): void{
    
    
    
  //   this.servicePanier.deletePanierService(panier.idPanier);
  //   let i = this.listPanier.indexOf(panier);
  //   this.servicePanier.deletePanierService(panier.idPanier).subscribe(
  //     ()=>this.listPanier.splice(i,1)
  //     )
    
  // }

  deletePanier(panier:Panier){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this cart!",
      icon: "warning",
      buttons: ["Cancel","Confirm"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          this.servicePanier.deletePanierService(panier.idPanier);
    let i = this.listPanier.indexOf(panier);
    this.servicePanier.deletePanierService(panier.idPanier).subscribe(
      ()=>this.listPanier.splice(i,1)
      )
    
          swal("Product has been deleted!", {
            icon: "success",
          });
        } /*else {
          swal("Product  is safe!");
        }*/
      });
    }




  detailPanier(panier:Panier):void{
    console.log(panier.u);
    

  }

}
