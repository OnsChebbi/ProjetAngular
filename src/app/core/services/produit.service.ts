import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Produit} from "../model/produit";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  currentProduct:Produit;
  status:boolean=false;
  modProduct(product:Produit){
    this.currentProduct=product;
  }
  UpdateProduct(produit:Produit){
    this.currentProduct=produit;
    this.status=true;
  }
  url=environment.url+"produit/";
  constructor(private http:HttpClient) { }
  getListProductService(){
    return this.http.get<Produit[]>(this.url+"retrieve-all-produits");
  }
  addProductService(product:Produit){
    return this.http.post(this.url+"addProduit",product);
  }




  deleteProductService(id:number){
    return this.http.delete(this.url+id);
  }
  getProductServiceById(id:any){
    return this.http.get<Produit>(this.url+id);
  }
  updateProductService(id:number,product:Produit){
    return this.http.put(this.url+"/"+id,product);
  }
//added by adem 
  getSingleProduct(id:number){
    return this.http.get(`${this.url}getProduit/${id}`);
  }


}
