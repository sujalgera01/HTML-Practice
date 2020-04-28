var johnMark1 = prompt("Enter John's score of first match");
var johnMark2 = prompt("Enter John's score of second match");
var johnMark3 = prompt("Enter John's score of third match");

var mikeMark1 = prompt("Enter Mike's score of first match");
var mikeMark2 = prompt("Enter Mike's score of second match");
var mikeMark3 = prompt("Enter Mike's score of third match");

var johnAvg, mikeAvg ;
johnAvg = (johnMark1 + johnMark2 + johnMark3)/3;
mikeAvg = (mikeMark1 + mikeMark2 + mikeMark3)/3;

if(johnAvg > mikeAvg){
	console.log('John wins the match and the avg score is: ' + johnAvg);
}
else if(johnAvg === mikeAvg){
	console.log("It's a Draw!");
}

else{
	console.log('Mike wins the match and the avg score is: ' + mikeAvg);
}

