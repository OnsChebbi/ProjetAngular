import { Injectable } from '@angular/core';
<<<<<<< Updated upstream
=======
import {Livraison} from "../model/livraison";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
<<<<<<< Updated upstream

  constructor() { }
}
=======
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
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

 getListLivraisonService(): Observable<Livraison>
 {
  return this.http.get<Livraison>(this.url)
  .pipe(
    retry(1),
    catchError(this.handleError)
  );

}
     // HttpClient API delete() method => Delete Livraison

  deleteLivraisonService(id: any){
 
    return this.http.delete<Livraison>(this.url+ id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
 


        // HttpClient API post() method => Create employee
  addLivraisonService(livraison: any): Observable<Livraison> {
    return this.http.post<Livraison>(this.url, JSON.stringify(livraison), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
 
  getLivraisonServiceById(id:any){
    return this.http.get<Livraison>(this.url+id);
  }
  updateLivraisonService(id:number,livraison:Livraison){
    return this.http.put(this.url+"/"+id,livraison);
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

>>>>>>> Stashed changes
