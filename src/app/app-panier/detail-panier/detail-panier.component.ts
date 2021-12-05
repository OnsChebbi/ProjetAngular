import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Panier } from 'src/app/core/model/Panier';
import { PanierService } from 'src/app/core/services/panier.service';

@Component({
  selector: 'app-detail-panier',
  templateUrl: './detail-panier.component.html',
  styleUrls: ['./detail-panier.component.css']
})
export class DetailPanierComponent implements OnInit {

  constructor(private servicePanier: PanierService,private activatedRoute: ActivatedRoute) { }

  panier:Panier|any;
  urlParams:any;
  id:number|null
  ngOnInit(): void {
    
      this.id=Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.servicePanier.getPanierById(this.id).subscribe(
        (data)=>{
          this.panier=data
          console.log(data);
          console.log(this.panier);
        })
              
} 
}