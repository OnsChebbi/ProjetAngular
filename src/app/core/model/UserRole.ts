export class UserRole{
  idUser: number;
  nom: string;
  prenom: string;
  dateNaissance: any;
  email: string;
  password: string;
  role:string;
  facture:any[];
  avisUser:any[];
  categorieUser:string;
  profession: string;
  phoneNumber:number;
  picture:string;
  adresse:string;


  constructor(idUser: number, nom: string, prenom: string, dateNaissance: any, email: string, password: string, role: string, facture: any[], avisUser: any[], categorieUser: string, profession: string, phoneNumber: number, picture: string, adresse: string) {
    this.idUser = idUser;
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
    this.email = email;
    this.password = password;
    this.role = role;
    this.facture = facture;
    this.avisUser = avisUser;
    this.categorieUser = categorieUser;
    this.profession = profession;
    this.phoneNumber = phoneNumber;
    this.picture = picture;
    this.adresse = adresse;
  }
}
