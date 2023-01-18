//dans les tableaux on precise le type des elements que ceux ci contiennent ex:
var tableauNumber = [1, 2]; //tableauNumber est de type  number[] : ne peut contenir que des numbers
tableauNumber[2] = 3; //on a rajouter un element entier au tableau.
tableauNumber[3] = 'toto;'; //Erreur:toto n'est pas un number 
var tableauNumber2 = []; //tableau de type number  vide : on ne peux y rajouté que des numbers .
tableauNumber2[0] = 3; //ok car 3 est un nombres
var tableauNumber3 = []; // tableau vide  de type  number ou string
tableauNumber3[0] = 'toto'; //ok car toto est bien un string
tableauNumber3[1] = 3; //ok car 3 est bien un number
tableauNumber3[2] = false; //Erreur  car false  n'est ni un number ni un string
