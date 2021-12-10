import {Role} from "./Role";

export class UserRole{
  idUser: number;
  nom: string;
  prenom: string;
  dateNaissance: any;
  email: string;
  password: string;
  role:Role[];
  facture:any[];
  avisUser:any[];
  categorieUser:string;
  profession: string;
  phoneNumber:number;
  picture:string;
  adresse:string;

}
