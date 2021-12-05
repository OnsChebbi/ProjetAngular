<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';
=======
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Livraison } from 'src/app/core/model/livraison';
import { LivraisonService } from 'src/app/core/services/livraison.service';

>>>>>>> Stashed changes

@Component({
  selector: 'app-main-livraison',
  templateUrl: './main-livraison.component.html',
  styleUrls: ['./main-livraison.component.css']
})
export class MainLivraisonComponent implements OnInit {
<<<<<<< Updated upstream

  constructor() { }

  ngOnInit(): void {
  }

=======
Livraison: any= [];
http: HttpClient;

  constructor(private livraisonService: LivraisonService) { }
 
  ngOnInit(): void { 
    this.loadLivraisons()
  }

  //Get list of livraisons
  loadLivraisons() {
  return this.livraisonService.getListLivraisonService().subscribe((data: {}) => {
    this.Livraison = data
    })
  }

   // Delete livraison
   delete(livraison:Livraison) {
   if (window.confirm('Are you sure, you want to delete?')){
    let i =this.Livraison.indexOf(livraison);
    this.livraisonService.deleteLivraisonService(livraison.idLvr).subscribe(
      ()=>this.Livraison.splice(i,1)
    )
      
      console.log(i)
    } 
  }  

>>>>>>> Stashed changes
}
