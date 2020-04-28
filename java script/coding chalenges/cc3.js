var tipCalculator = function(amount) {
	var startTip = 0;
	if(amount>0){
	if(amount < 500){
		tip1 = startTip + 0.2*amount;
		console.log('Tip paid is: ' + tip1);
	}
	else if(amount>=500 && amount<1500){
		tip2 = startTip + 0.15*amount;
		console.log('Tip paid is: ' + tip2);
	}
	else{
		tip3 = startTip + 0.1*amount;
		console.log('Tip paid is: ' + tip3); 
	}
}
else{
	console.log('Invalid Amount');
}
}

//bills value take by yourself
var bills = [500 , 125, 1800];
var tip1,tip2,tip3;
Tip1 = tipCalculator(bills[0]);
Tip2 = tipCalculator(bills[1]);
Tip3 = tipCalculator(bills[2])
var ip = [Tip1,Tip2,Tip3];

var finalBill = [tip[0] + bills[0], tip[1] + bills[1], tip[2] + bills[2]];
console.log(tip , finalBill);