alert("Welcome!!!");
var age= prompt("Enter your age");
var ageroot=Math.sqrt(age);
if(age<0){
	alert("Age cannot be negative");
}

else if(age==21){
	alert("Happy 21st Birthday");
}

else if(age % 2!=0) {
	alert("Your age is Odd");
	if(age%ageroot==0){
		alert("Your age is a perfect square");
	}
}

else if(age %2==0){
	alert("Your age is even");
}

else{
	alert("Youe age is positive");
}