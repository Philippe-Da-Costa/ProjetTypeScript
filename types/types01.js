// TypeScript  a ses propres types , compatible avec ceux de JS.
// Apres compilation avec js, ces variables pourront eventuellement 
// avoir un autre type.
//Ts peut inferer des types a partir des valeurs
var x = 4; //type number
var y = "toto"; //string
var z = false; //boolean
//Les tableaux
var tab1 = [1, 2, 3]; //number [] :Tableau contient uniquement des entiers
var tab2 = ["toto", "titi", "tata"]; //string [] :Tableau contient uniquement des strings
var tab3 = [3, "titi", "tata"]; // type (number[] ,string [] ):Tableau contient uniquement  des number et desdes strings
