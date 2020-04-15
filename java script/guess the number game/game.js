alert("Welcome to the simple game.");
alert("Choose a number from 0 to 9 to guess it correct!");
var secretNumber = 6;
var guess = Number(prompt("Enter your guess"));
if(guess == secretNumber){
	alert("WOW! You guess it right.");
}
else if(guess>secretNumber + 2){
	alert("It's Too High! Guess it again.");

}

else if (guess < secretNumber-2){
	alert("It's Too Low! Guess it again.");
}

else if(guess<=secretNumber+2 && guess>=secretNumber-2){
	alert("You are close to answer. Try Again!");
}
alert("Refresh the page to do it again!")