var markMass = prompt("Enter mark's Mass");
var markHeight = prompt("Enter mark's Height");
var johnMass = prompt("Enter john's Mass");
var johnHeight = prompt("Enter john's Height");
 var markBMI , johnBMI;
 markBMI = markMass / (markHeight * markHeight);
 johnBMI = johnMass / (johnHeight * johnHeight);

 console.log(markBMI);
 console.log(johnBMI);

 var yes, no;
 yes = true;
 no = false;
 if(markBMI > johnBMI){
 	console.log("Is Mark's BMI higher than John ?" + yes);	
 }
 else {
 	console.log("Is Mark's BMI higher than John ?" + no);
 }