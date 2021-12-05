import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Livreur } from 'src/app/core/model/livreur';
import { LivreurService } from 'src/app/core/services/livreur.service';

@Component({
  selector: 'app-form-livreur',
  templateUrl: './form-livreur.component.html',
  styleUrls: ['./form-livreur.component.css']
})
export class FormLivreurComponent implements OnInit {

  livreur: Livreur;
  status:boolean;
  constructor(private livreurService : LivreurService,private router: Router) { }

  ngOnInit(): void {
    this.status=this.livreurService.status;
    if (this.livreurService.status){
      this.livreur =  this.livreurService.currentLivreur;
    }else {
      this.livreur =  new Livreur();
    }
  }

  save(){
    if (this.status){
      this.livreurService.updateListLivreurService(this.livreur).subscribe(
        ()=>this.router.navigate(['/retrieve-all-livreurs'])
      )
    }
    else {
      this.livreurService.addListLivreurService(this.livreur).subscribe(
        ()=>this.router.navigate(['/retrieve-all-livreurs'])
      )
    }
  }


  return(){
    this.router.navigate(['/livreur']);
  }


}