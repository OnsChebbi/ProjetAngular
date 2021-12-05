<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';
=======
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivraisonService } from 'src/app/core/services/livraison.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-form-livraison',
  templateUrl: './form-livraison.component.html',
  styleUrls: ['./form-livraison.component.css']
})
export class FormLivraisonComponent implements OnInit {
<<<<<<< Updated upstream

  constructor() { }

  ngOnInit(): void {
  }

=======
  @Input() livraison = { dateLivraisonDate: '', adresseLvr: '', status: false }
  constructor(private livraisonService: LivraisonService,public router: Router) { }

  ngOnInit(): void {

  }
  save() {
    this.livraisonService.addLivraisonService(this.livraison).subscribe((data: {}) => {
      this.router.navigate(['/livraison'])
    })
  }

  return()
  {
    this.router.navigate(['/livraison'])

  }
>>>>>>> Stashed changes
}
