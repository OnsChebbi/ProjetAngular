import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livraison } from 'src/app/core/model/livraison';
import { LivraisonService } from 'src/app/core/services/livraison.service';

@Component({
  selector: 'app-form-livraison',
  templateUrl: './form-livraison.component.html',
  styleUrls: ['./form-livraison.component.css']
})
export class FormLivraisonComponent implements OnInit {

  ngOnInit(): void {
  }
  livraison: Livraison;

  constructor(private livraisonService: LivraisonService,public router: Router) { }

  save() {
    this.livraisonService.addLivraisonService(this.livraison)
  }

  return()
  {
    this.router.navigate(['/livraison'])

  }
}
