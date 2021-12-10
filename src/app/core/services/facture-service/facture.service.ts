import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Facture } from '../../model/Facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http: HttpClient) { }
  url=environment.url+"Facture";

  getListFactureService(){
    return this.http.get<Facture[]>(`${this.url}/retreive-all-factures`)
    }
    addFactureService(id:number,facture: Facture){
      return this.http.post(`${this.url}/add-facture/${id}/`, facture)
    }
    deletePanierService(idPanier:number){
      return this.http.delete(`${this.url}/remove-panier/${idPanier}`)
    }
    /*updatePanierService(panier: Facture){
      return this.http.put(this.url+panier.idPanier,panier)
    }
    getPanierById(idPanier:number){
      return this.http.get(`${this.url}/retrieve-panier/${idPanier}`)
    }*/

}
