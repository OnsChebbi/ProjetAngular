import { Injectable } from '@angular/core';
import { Livreur } from '../model/livreur';
import { environment } from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {
  httpOptions = {
    headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin':'*',
   })
 }
  url=environment.url+"livreur/";
  constructor(private http: HttpClient) { }
  currentLivreur:Livreur;
  status:boolean=false;
  MODLivreur(livreur:Livreur){
    this.currentLivreur=livreur;
  }
  UpdateLivreur(livreur:Livreur){
    this.currentLivreur=livreur;
    this.status=true;
  }
     getListLivreurService(){
    return this.http.get<Livreur[]>(this.url+"retrieve-all-livreurs")
    }


    getListLivraisonById(id:any){
      return this.http.get<Livreur[]>(this.url+"retrieve-livraisons/"+id)
      }
      //aaa
    getById(id:any){
      return this.http.get<Livreur>(this.url+"retrieve-livreur/"+id)
    }

    addListLivreurService(livreur: Livreur){

      return this.http.post(this.url+"add-livreur", livreur,this.httpOptions)


    }

    deleteListLivreurService(id:number){
      return this.http.delete(this.url+id)
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
    updateListLivreurService(livreur: Livreur){
      return this.http.put(this.url+livreur.id,livreur)
    }

    getLivreurServiceById(id:any){
         return this.http.get<Livreur>(this.url+id)

    }
}
