import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  list: Product[]=[
    {
      "title": "test",
      "description": "test",
      "quantity": 55,
      "price": 1233,
      "picture": "assets/femme.jpeg",
      "nbrLike": 0,
      "id": 13,
      "category": "Vestimentaire"
    },
    {
      "title": "t shirt",
      "picture": "assets/t shirt 1.jpg",
      "quantity": 2,
      "price": 3,
      "description": "ffgfghjhjhhj",
      "nbrLike": 0,
      "id": 17,
      "category": "Vestimentaire"
    },
    {
      "picture": "assets/regentlogo.jpg",
      "title": "new",
      "quantity": 7,
      "price": 88,
      "description": "new newxcf vbvb",
      "nbrLike": 0,
      "id": 18,
      "category": "Vestimentaire"
    },
    {
      "title": "okujh",
      "picture": "assets/10034515C255_81_G.jpg",
      "quantity": 20,
      "price": 33,
      "description": "aqqd dvsvs c dvs  xvsxv g gn",
      "nbrLike": 0,
      "id": 19,
      "category": "Vestimentaire"
    },
    {
      "title": "women t shirt",
      "picture": "assets/10034595C056_83_G.jpg",
      "quantity": 1,
      "price": 100,
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam itaque quas modi sunt aspernatur assumenda autem pariatur!",
      "nbrLike": 0,
      "id": 20,
      "category": "Vestimentaire"
    },
    {
      "picture": "assets/pc-gamer-rayzen-5.jpg",
      "title": "laptop",
      "quantity": 5,
      "price": 10000,
      "description": "Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java",
      "nbrLike": 0,
      "id": 21,
      "category": "Electromenager"
    },
    {
      "title": "ppp",
      "picture": "assets/femme.jpeg",
      "quantity": 1,
      "price": 1,
      "description": "pppppp",
      "nbrLike": 0,
      "id": 22,
      "category": "Vestimentaire"
    }
  ];

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
    return this.http.get<Product[]>(this.url);
  }
  addProductService(product:Product){
    return this.http.post(this.url,product);
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
