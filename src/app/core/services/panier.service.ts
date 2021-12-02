import { Injectable } from '@angular/core';
import { Panier } from '../model/Panier';
import { environment } from 'src/environments/environment';
import {
  HttpClient
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  url=environment.url+"panier/"
  constructor(private http: HttpClient) { }

  getListPanierService(){
    return this.http.get<Panier[]>(this.url)
    }
    addPanierService(panier: Panier){
      return this.http.post(this.url, panier)
    }
    deletePanierService(idPanier:string){

      return this.http.delete(this.url+idPanier)
    }
    updatePanierService(panier: Panier){
      return this.http.put(this.url+panier.idPanier,panier)
    }


}
