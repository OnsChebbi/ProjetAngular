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

 getListLivraisonService(): Observable<Livraison>
 {
  return this.http.get<Livraison>(this.url+"retrieve-all-livraisons")


}
 deleteLivraisonService(id:any)
 {
  return this.http.delete(this.url+id)
 }
 addLivraisonService(livraison:Livraison)
 {
   return this.http.post(this.url,livraison)
 }
  getLivraisonServiceById(id:any){
    return this.http.get<Livraison>(this.url+id);
  }
  updateLivraisonService(livraison:Livraison){
    return this.http.put(this.url+livraison.id,livraison);
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
