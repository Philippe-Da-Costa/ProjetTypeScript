var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personne = /** @class */ (function () {
    //constructeur
    function Personne(id, nom, prenom, adresse, cp, ville, age) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.cp = cp;
        this.ville = ville;
        this._age = age;
    }
    Object.defineProperty(Personne.prototype, "age", {
        //mehode GETTER
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    //je rajoute la mehode disBonjour()
    Personne.prototype.direBonjour = function () {
        console.log("Bonjour mon nom est : ".concat(this.nom, " ").concat(this.prenom));
    };
    ;
    //methode AjouterUnAn()
    Personne.prototype.AjouterUnAn = function () {
        this._age = this._age + 1;
    };
    return Personne;
}());
var Salarie = /** @class */ (function (_super) {
    __extends(Salarie, _super);
    function Salarie(id, nom, prenom, adresse, cp, ville, age, numSecu, dateDebut, anciennete, posteOccupe, classification, categorie) {
        var _this = _super.call(this, id, nom, prenom, adresse, cp, ville, age) || this;
        _this.numSecu = numSecu;
        _this.dateDebut = dateDebut;
        _this.anciennete = anciennete;
        _this.posteOccupe = posteOccupe;
        _this.classification = classification;
        _this.categorie = categorie;
        return _this;
    }
    return Salarie;
}(Personne));
var pers1 = new Personne(1, "dacosta", "Philippe", "12 allee des bois", "77700", "Paris", 45);
var sal1 = new Salarie(1, "dacosta", "Philippe", "12 allee des bois", "77700", "Paris", 45, 1888888, "18 01 2023", "1 ans", "Dev", "Cadre", "A1");
console.log("".concat(pers1.id, " , ").concat(pers1.nom, " ,").concat(pers1.prenom, " ,").concat(pers1.adresse, " , ").concat(pers1.cp, " ,").concat(pers1.ville, " , ").concat(pers1.age, ", \n").concat(sal1.numSecu, " , ").concat(sal1.dateDebut, " , ").concat(sal1.anciennete, " ,").concat(sal1.posteOccupe, " ,").concat(sal1.classification, " ,").concat(sal1.categorie));
