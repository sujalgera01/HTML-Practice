var john = {
	firstName: 'John',
	lastName: 'Smith',
	mass: 80,
	height: 1.76,
	BMI: function(mass , height){
	var result = this.mass / (this.height * this.height);
	return result;
}
};

var mark = {
	firstName: 'Mark',
	lastName: 'Henry',
	mass: 91,
	height: 1.89,
	BMI: function(mass , height){
	var result = this.mass / (this.height * this.height);
	return result;
}
};

console.log(john.BMI());
console.log(mark.BMI());

if (john.BMI > mark.BMI){
	console.log("John's BMI is greater and have the value" + john.BMI());
}
else{
	console.log("Mark's BMI is greater and have the value" + mark.BMI());
}


