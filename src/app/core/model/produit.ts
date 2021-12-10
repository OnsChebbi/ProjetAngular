import {Categories} from "../../enum/categories";

export class Produit{
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
  pourcentageRemise:number;
  variationCost:number;
  idDetailProduit:number;
  dateCreation: Date;
  dateDerniereModification :Date;

}
