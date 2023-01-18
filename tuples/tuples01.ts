let empId:number=1;
let emplName:string ="Da Silva";

//tuple type
let employee:[number,string] = [empId,emplName];
let person:[number,string,boolean]=[empId,emplName,true]
let user:[number,string,boolean,number,string];
    user=[empId,emplName,true,25,"admin"];

let employe1:[number,string] [];
employe1=[[1,"steve jobs"],[1,"jeff Bezos"],[1,"Marc Zuck"] ];
employe1[1][1];

console.log(employe1[1][1]);

employe1.push([3,"Elon Musk"]);
employe1.push([4,"bill Gates"]);

console.log(employe1);
//on concatenise
employe1[1][1]= employe1[1][1].concat(" Alberto")
console.log(employe1);

//compile
//tsc tuples/tuples01.ts 
//affiche
//node tuples01.js 

 