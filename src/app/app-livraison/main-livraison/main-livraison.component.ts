
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livraison } from 'src/app/core/model/livraison';
import { LivraisonService } from 'src/app/core/services/livraison.service';


@Component({
  selector: 'app-main-livraison',
  templateUrl: './main-livraison.component.html',
  styleUrls: ['./main-livraison.component.css']
})
export class MainLivraisonComponent implements OnInit {


Livraison: any= [];
http: HttpClient;

  constructor(private livraisonService: LivraisonService, private router: Router) { }
 
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
    this.livraisonService.deleteLivraisonService(livraison.id).subscribe()
   this.loadLivraisons()
  }  
  

  //update
  update(livraison: Livraison){
    this.livraisonService.UpdateLivraison(livraison);
    this.router.navigate(['/add-livraison']);
  }
}
