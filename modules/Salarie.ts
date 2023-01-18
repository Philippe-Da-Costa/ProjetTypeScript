import { ISalarie } from "./ISalarie";
import { IPersonne } from "./Ipersonne"; 
import { Personne } from "./Personne";
export class Salarie extends Personne {
    numSecu : number;
    dateDebut : string;
    anciennete : string;
    posteOccupe : string;
    classification : string;
    categorie : string;
    constructor( 
        id : number,
        nom : string,
        prenom : string,
        adresse : string,
        cp : string,
        ville : string,
        age:number,
        numSecu : number,
        dateDebut : string,
        anciennete : string,
        posteOccupe : string,
        classification : string,
        categorie : string){

super ( id,nom ,prenom,adresse,cp,ville,age,);// j herite les proprietes du constructeur
            this.numSecu=numSecu;
            this.dateDebut=dateDebut;
            this.anciennete=anciennete;
            this.posteOccupe=posteOccupe;
            this.classification=classification;
            this.categorie=categorie;
        
    }
}
