import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  currentProduct:Product;
  status:boolean=false;
  modProduct(product:Product){
    this.currentProduct=product;
  }
  UpdateProduct(product:Product){
    this.currentProduct=product;
    this.status=true;
  }
  url=environment.url+"product/";
  constructor(private http:HttpClient) { }
  getListProductService(){
    return this.http.get<Product[]>(this.url+"retrieve-all-produits");
  }
  addProductService(product:Product){
    return this.http.post(this.url+"addProduit",product);
  }




  deleteProductService(id:number){
    return this.http.delete(this.url+id);
  }
  getProductServiceById(id:any){
    return this.http.get<Product>(this.url+id);
  }
  updateProductService(id:number,product:Product){
    return this.http.put(this.url+"/"+id,product);
  }



}
