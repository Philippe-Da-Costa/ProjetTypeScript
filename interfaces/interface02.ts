interface IPersonne {
     id : number;
     nom : string;
     prenom : string;
     adresse : string;
     cp : string;
     ville : string;
     age : number

     direBonjour();
}
interface ISalarie{ 
    numSecu : number;
    dateDebut : string;
    anciennete : string;
    posteOccupe : string;
    classification : string;
    categorie : string;}


class Personne {
    id : number;
    nom : string;
    prenom : string;
    adresse : string;
    cp : string;
    ville : string;
    private _age:number;

    //mehode GETTER
   get age(){
        return  this._age
    }
    //constructeur
constructor(
        id : number,
        nom : string,
        prenom : string,
        adresse : string,
        cp : string,
        ville : string,
        age:number
    ){
        this.id =id;
        this.nom =nom;
        this.prenom =prenom;
        this.adresse =adresse;
        this.cp =cp;
        this.ville =ville;
        this._age = age;
    }
//je rajoute la mehode disBonjour()

direBonjour(){
    console.log(`Bonjour mon nom est : ${this.nom} ${this.prenom}`);
 };
 //methode AjouterUnAn()
 AjouterUnAn(){
    this._age = this._age +1;
 }

}  



class Salarie extends Personne {
    
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

const pers1:IPersonne = 
new Personne(1,"dacosta","Philippe","12 allee des bois","77700","Paris",45);

const sal1:ISalarie =
new Salarie(1,"dacosta","Philippe","12 allee des bois","77700","Paris",45,1888888,
"18 01 2023","1 ans","Dev","Cadre","A1");
console.log(`${pers1.id} , ${pers1.nom} ,${pers1.prenom} ,${pers1.adresse} , ${pers1.cp} ,${pers1.ville} , ${pers1.age}, 
${sal1.numSecu} , ${sal1.dateDebut} , ${sal1.anciennete} ,${sal1.posteOccupe} ,${sal1.classification} ,${sal1.categorie}`);

