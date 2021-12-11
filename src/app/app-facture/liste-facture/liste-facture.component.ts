import { Component, OnInit } from '@angular/core';
import { Facture } from 'src/app/core/model/Facture';
import { FactureService } from 'src/app/core/services/facture-service/facture.service';

@Component({
  selector: 'app-liste-facture',
  templateUrl: './liste-facture.component.html',
  styleUrls: ['./liste-facture.component.css']
})
export class ListeFactureComponent implements OnInit {

  constructor(private factureService:FactureService) { }

  listFacture:Facture[];

  ngOnInit(): void {
    this.factureService.getListFactureService().subscribe(
      (data)=>{
        this.listFacture=data
      }
    )

  }

}
