//dans les tableaux on precise le type des elements que ceux ci contiennent ex:

let tableauNumber =[1,2] //tableauNumber est de type  number[] : ne peut contenir que des numbers
tableauNumber[2] =3 //on a rajouter un element entier au tableau.
tableauNumber[3]='toto;' //Erreur:toto n'est pas un number 

let tableauNumber2:number[]=[]; //tableau de type number  vide : on ne peux y rajouté que des numbers .
tableauNumber2[0]= 3; //ok car 3 est un nombres

let tableauNumber3:(number|string)[] =[]; // tableau vide  de type  number ou string

tableauNumber3[0]='toto'; //ok car toto est bien un string
tableauNumber3[1]=3; //ok car 3 est bien un number
tableauNumber3[2]=false; //Erreur  car false  n'est ni un number ni un string



//ls tuples indique precisement le types de chaque element
let tuple:[number,string]=[1,"toto"];//tuples dont l elemnt 1 est de type number et le deuxieme de type string
tuple= [3,"tata"] //ok
tuple=["toto",2] //erreur respecter l'ordre des types  toto n est pas un number et 3 n est pas un string
tuple=[3,"toto","titi"];// tuple = couple , pas un triplet 


let tuple2:[number,string,number,string]=[1,"",2,""];








