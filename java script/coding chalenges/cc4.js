var john = {
	firstName: 'John',
	lastName: 'Smith',
	mass: 80,
	height: 1.76,
};

var mark = {
	firstName: 'Mark',
	lastName: 'Henry',
	mass: 91,
	height: 1.89
};
var mass = this.mass;
var height = this.height;
var BMI = function(mass , height){
	var result = mass / (height * height);
	return result;
}

john.BMI = BMI();
mark.BMI = BMI();

console.log(john.BMI);
console.log(mark.BMI);

