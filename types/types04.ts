//On peux imposer le type d'une variable avec l'operateur ': type 'parexemple:
let x: number = 4; //superflu, 4 implique que x est un number.
x = false ; //Erreur de compilation car false n est pas un number

let y: any; //j impose que y soit any , meme si le nombre vaut 4
y ="toto;" //valise car le type est any
let z = undefined; // detype any car on sait que l'on initialise ce genre de variable pour ensuite lui affecté une autre valeur

let u :undefined=undefined; // u est de typeundifined et le restera .
u = 3; //erreur ; 3 n'est pas de type undefined

let v:null = null; //v est de type null 
v = 2; // erreur : 2 n est pas de type  null

let w1:number = undefined; // w1 est deja definit de ype number d0nc ne peux etre definit en undifined
let w2:number = null; // w1 est deja definit de ype number dnc ne peux etre definit en null number n'est pas null