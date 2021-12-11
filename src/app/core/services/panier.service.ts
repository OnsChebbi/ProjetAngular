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

  url=environment.url+"panier"
  constructor(private http: HttpClient) { }

    getListPanierService(){
    return this.http.get<Panier[]>(`${this.url}/retrieve-all-paniers`)
    }
    addPanierService(panier: Panier){
      return this.http.post(this.url, panier)
    }
    deletePanierService(idPanier:number){
      return this.http.delete(`${this.url}/remove-panier/${idPanier}`)
    }
    updatePanierService(panier: Panier){
      return this.http.put(this.url+panier.idPanier,panier)
    }
    getPanierById(idPanier:number){
      return this.http.get(`${this.url}/retrieve-panier/${idPanier}`)
    }

}
