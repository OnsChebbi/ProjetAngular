import { Injectable } from '@angular/core';
import { Livreur } from '../model/livreur';
import { environment } from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {
  url=environment.url+"livreur/";
  constructor(private http: HttpClient) { }
  currentLivreur:Livreur;
  status:boolean=false;
  getListLivreurService(){
    return this.http.get<Livreur[]>(this.url)
    
    }
    addListLivreurService(livreur: Livreur){
      return this.http.post(this.url+"add-livreur/", livreur)
    }
    deleteListLivreurService(id:number){
      return this.http.delete(this.url+id)
    }
   
    updateListLivreurService(livreur: Livreur){
      return this.http.put(this.url+livreur.idLiv,livreur)
    }

    getLivreurServiceById(id:string){
     
    }
}
