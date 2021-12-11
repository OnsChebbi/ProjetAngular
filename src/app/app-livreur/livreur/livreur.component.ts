import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livraison } from 'src/app/core/model/livraison';
import { Livreur } from 'src/app/core/model/livreur';
import { LivreurService } from 'src/app/core/services/livreur.service';
declare const google: any;
@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css']
})
export class LivreurComponent implements OnInit, AfterViewInit {

  constructor(private livreurService: LivreurService,private router: Router,private activated:ActivatedRoute) { }
  livreur:Livreur;
<<<<<<< Updated upstream
<<<<<<< HEAD
   Livraison: any= [];
=======
>>>>>>> a4c8080d7533e3db9c7d4355157913b8745fb1d7
=======
   Livraison: any= [];
>>>>>>> Stashed changes
  map:any;
  @ViewChild('mapElement') mapElement:any;


  ngOnInit(): void {
    this.livreur=this.livreurService.currentLivreur;
    console.log(this.livreur)
    this.activated.paramMap.subscribe(
      (params)=> {
        let id = params.get('id');
        this.livreurService.getById(id).subscribe(
          (data) => this.livreur = data
        )
             }
    )
<<<<<<< Updated upstream
<<<<<<< HEAD
    this.loadLivraison()
=======

>>>>>>> a4c8080d7533e3db9c7d4355157913b8745fb1d7
=======
    this.loadLivraison()
>>>>>>> Stashed changes
  }
  ngAfterViewInit()
  {
    this.map= new google.maps.Map(this.mapElement.nativeElement,
    {
      center: {lat:36.8992921 ,lng:10.1915561},
      zoom:14,
    });
  }
  return(){
    this.router.navigate(['/livreur']);
  }
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> Stashed changes

  loadLivraison()
  {
    this.activated.paramMap.subscribe(
      (params)=> {
        let id = params.get('id');
        this.livreurService.getListLivraisonById(id).subscribe(
      (data:any[])=> this.Livraison= data
    )
        }
    )
  }
<<<<<<< Updated upstream
}
=======
=======
>>>>>>> Stashed changes
}
>>>>>>> a4c8080d7533e3db9c7d4355157913b8745fb1d7
