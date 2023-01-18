//On peux imposer le type d'une variable avec l'operateur ': type 'parexemple:
var x = 4; //superflu, 4 implique que x est un number.
x = false; //Erreur de compilation car false n est pas un number
var y; //j impose que y soit any , meme si le nombre vaut 4
y = "toto;"; //valise car le type est any
var z = undefined; // detype any car on sait que l'on initialise ce genre de variable pour ensuite lui affecté une autre valeur
var u = undefined; // u est de typeundifined et le restera .
u = 3; //erreur ; 3 n'est pas de type undefined
var v = null; //v est de type null 
v = 2; // erreur : 2 n est pas de type  null
var w1 = undefined; // w1 est deja definit de ype number d0nc ne peux etre definit en undifined
var w2 = null; // w1 est deja definit de ype number dnc ne peux etre definit en null number n'est pas null
