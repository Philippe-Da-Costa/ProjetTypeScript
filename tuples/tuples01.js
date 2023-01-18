var empId = 1;
var emplName = "Da Silva";
//tuple type
var employee = [empId, emplName];
var person = [empId, emplName, true];
var user;
user = [empId, emplName, true, 25, "admin"];
var employe1;
employe1 = [[1, "steve jobs"], [1, "jeff Bezos"], [1, "Marc Zuck"]];
employe1[1][1];
console.log(employe1[1][1]);
employe1.push([3, "Elon Musk"]);
employe1.push([4, "bill Gates"]);
console.log(employe1);
//on concatenise
employe1[1][1] = employe1[1][1].concat(" Alberto");
console.log(employe1);
