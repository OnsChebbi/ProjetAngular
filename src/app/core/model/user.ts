import {Facture} from "./Facture";
import {Role} from "./Role";

export class User{
  idUser: number;
  nom: string;
  prenom: string;
  dateNaissance: any;
  email: string;
  password: string;
  role:{
    id:number;
    role:string;
  };
  facture:any[];
  avisUser:any[];
  categorieUser:string;
  profession: string;
  phoneNumber:number;
  picture:string;
  adresse:string;
}

