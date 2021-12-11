import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livreur } from 'src/app/core/model/livreur';
import { LivreurService } from 'src/app/core/services/livreur.service';

@Component({
  selector: 'app-main-livreur',
  templateUrl: './main-livreur.component.html',
  styleUrls: ['./main-livreur.component.css']
})
export class MainLivreurComponent implements OnInit {

  listLivreur: Livreur[];
  currentLivreur: Livreur;
  searchText:any;

  constructor(private livreurService: LivreurService,private router: Router) { }
   

  ngOnInit(): void {
    this.livreurService.getListLivreurService().subscribe(
      (data:Livreur[])=> this.listLivreur= data

    )
    console.log(this.listLivreur)
  }
 
  delete(id: number){
/* 
  let i = this.listLivreur.indexOf(livreur);
    console.log("the i is:"+i) */
  
   this.livreurService.deleteListLivreurService(id).subscribe()
   console.log(id)    
   this.load()

   }
  load()
  {
    return this.livreurService.getListLivreurService().subscribe()
  }

  update(livreur: Livreur){
  this.livreurService.UpdateLivreur(livreur);
  this.router.navigate(['/add-livreur']);
  }

  ShowMore(livreur:Livreur){
    this.livreurService.getLivreurServiceById(livreur.id).subscribe(
      (livreurD:Livreur)=>[this.livreurService.MODLivreur(livreurD),this.router.navigate(['/livreur/:id'])]
    )
  }
}
