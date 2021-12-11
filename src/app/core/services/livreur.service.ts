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
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
    getListLivraisonById(id:any){
      return this.http.get<Livreur[]>(this.url+"retrieve-livraisons/"+id)
      }
      //aaa
<<<<<<< Updated upstream
=======

>>>>>>> a4c8080d7533e3db9c7d4355157913b8745fb1d7
=======
>>>>>>> Stashed changes
    getById(id:any){
      return this.http.get<Livreur>(this.url+"retrieve-livreur/"+id)
    }

    addListLivreurService(livreur: Livreur){
<<<<<<< Updated upstream
<<<<<<< HEAD
      return this.http.post(this.url+"add-livreur", livreur,this.httpOptions)
=======
      return this.http.post(this.url+"add-livreur", livreur)
>>>>>>> a4c8080d7533e3db9c7d4355157913b8745fb1d7
=======
      return this.http.post(this.url+"add-livreur", livreur,this.httpOptions)
>>>>>>> Stashed changes
    }

    deleteListLivreurService(id:number){
      return this.http.delete(this.url+"remove-livreur/"+id)
    }
    
    updateListLivreurService(livreur: Livreur){
      return this.http.put(this.url+"modify-livreur",livreur,this.httpOptions)
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

}
