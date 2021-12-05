import { Facture } from "./Facture";
import { Panier } from "./Panier";
import { Product } from "./product";

export class DetailFacture{
    idDetailFacture: string;
    qte: number;
    prixTotal: number;
    porcentageRemise: number;
    montantRemise : number;
    facture:Facture;
    produit:Product;
    panier:Panier;
}