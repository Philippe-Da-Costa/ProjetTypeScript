//Rappels
// TypeScript  a ses propres types , compatible avec ceux de JS.
// Apres compilation avec js, ces variables pourront eventuellement 
// avoir un autre type.
//Ts peut inferer des types a partir des valeurs

let x =4;//type number
let y ="toto"//string
let z =false//boolean

//Les tableaux
let tab1=[1,2,3] //number [] :Tableau contient uniquement des entiers
let tab2=["toto","titi","tata"] //string [] :Tableau contient uniquement des strings
let tab3=[3,"titi","tata"] // type (number[] ,string [] ):Tableau contient uniquement  des number et desdes strings
