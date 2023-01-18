//Rappel
//Si l on declare une variable sans lui affecter de valeur son type devient ANY
//dans ce cas  on peux lui infecter n'impoerte quel valeur . Son type sera toujours ANY.
//Ceci  implique qu'on peux lui reaffecté une autre vaeur de type different
//ex:

 let x ; //type=any
 x = 4;  //  instruction valide toujours any mais la valeur est 4
 x ="toto" // instruction valide  toujours any mais la valeur est "toto"

 // on peut imposer le type d'une variable lors desa declaration 
 //En ecrivant: 
 let y:number;
 y=4; //ok car 4 est bien un nombre
 y='titi' ; //Erreur  car titi n est pas un nombre




