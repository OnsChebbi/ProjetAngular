import {Categories} from "../../enum/categories";

export class Product{
  id: number;
  libelle: string;
  code: string;
  description: string;
  quantite: number;
  prixUnitaire: number;
  picture : string;
  nbrLike: number;
  category : Categories;
  detailFacture:any[];
  rayon:any;
  s:any;
  fornisseur:any[];
  avisProduit:any[];
  detailproduit:any;
  qtyTotal:number=0;
  variationCost:number;
  idDetailProduit:number;
  dateCreation: Date;
  dateDerniereModification :Date;

}
