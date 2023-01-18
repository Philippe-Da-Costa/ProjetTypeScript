var CompteUtilisateur = /** @class */ (function () {
    //j ajoute un constructeur similé
    function CompteUtilisateur(nom, prenom, id) {
        this.nom = nom;
        this.prenom = prenom;
        this.id = id;
    }
    return CompteUtilisateur;
}());
//j instancie un objet en passant par l'interface utilisateur
var util1 = new CompteUtilisateur("DA COSTA", "PHILIPPE", 1);
console.log("".concat(util1.nom, " , ").concat(util1.prenom, " ,   ").concat(util1.id, " "));
