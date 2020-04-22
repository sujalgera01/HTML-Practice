var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){

if(input === "list"){
	displayTodo();
} 

else if(input === "new"){
	addTodo();
}

else if(input === "delete"){
	delTodo();
}

input = prompt("What would you like to do?")
}
console.log("You have Quit!"); 


function displayTodo(){
	console.log("********");
	todos.forEach(function(todo,i){
		console.log(i + ": " + todo);
	});
	console.log("********");
}

function addTodo(){
	var newTodo = prompt("Enter new Todo");
	todos.push(newTodo);
	console.log("Added Todo");
}

function delTodo(){
	var index = prompt("Enter the index of Todo to delete");
	todos.splice(index);
	console.log("Deleted Todo");
}