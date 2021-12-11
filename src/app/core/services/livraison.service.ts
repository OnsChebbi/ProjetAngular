import { Injectable } from '@angular/core';
import {Livraison} from "../model/livraison";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  httpOptions = {
    headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin':'*',
   })
 }
url=environment.url+"livraison/";

  constructor(private http:HttpClient) {     console.log("dkhalna l service");
  
  }

  // Error handling 
  handleError(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

 getListLivraisonService()
 {
  return this.http.get<Livraison>(this.url+"retrieve-all-livraisons", this.httpOptions)


}
 deleteLivraisonService(id:any)
 {
  return this.http.delete(this.url+"remove-livraison/"+id)
 }
 addLivraisonService(livraison:Livraison)
 {
   return this.http.post(this.url+"add-livraison/"+livraison.l_id+"/"+livraison.f_id_facture,livraison, this.httpOptions)
 }
  getLivraisonServiceById(id:any){
    return this.http.get<Livraison>(this.url+id);
  }
  updateLivraisonService(livraison:Livraison){
    return this.http.put(this.url+"modify-livraison/",livraison, this.httpOptions);
  }
  CurrentLivraison:Livraison;
  status:boolean=false;
  MODLivraison(Livraison:Livraison){
    this.CurrentLivraison=Livraison;
  }
  UpdateLivraison(Livraison:Livraison){
    this.CurrentLivraison=Livraison;
    this.status=true;
  }

   

}
