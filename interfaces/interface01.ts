//INTERFACE
interface Utilisateur {
    //definition  de mon contrat
    //j ajoute les champs nom, prenom et id ils sont obligatoire dans mon contrat
    // rappel visibilite ex : public private  protected (par defaut public)
    nom : string;
    prenom : string;
    id : number;
}
class CompteUtilisateur{
    nom : string;
    prenom : string;
    id : number;
    //j ajoute un constructeur similé
    constructor(
        nom : string,
        prenom : string,
        id : number
    ){
        this.nom = nom;
        this.prenom = prenom;
        this.id = id;
    }
}
//j instancie un objet en passant par l'interface utilisateur
const util1 : Utilisateur = new CompteUtilisateur("DA COSTA","PHILIPPE",1);

console.log(`${util1.nom} , ${util1.prenom} ,   ${util1.id} `);
