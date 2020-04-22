alert("Welcome!!!");

var input = prompt("enter the array elements only without spaces")
function printReverse(arr){
	for(var i=arr.length - 1; i>=0; i--){
		console.log(arr[i]);
	}
}

printReverse(input);