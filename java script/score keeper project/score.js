var p1Button = document.getElementById("p1Button");
var p1Display = document.getElementById("p1Display");
var p1Score = 0;

var p2Button = document.getElementById("p2Button");
var p2Display = document.getElementById("p2Display");
var p2Score = 0;

var winningScore = 5;
var gameOver = false;

var reset = document.getElementById("reset");
var selectValue = document.querySelector("input");
var p = document.querySelector("p span")



p1Button.addEventListener("click",function(){
	if(!gameOver){
	p1Score++;
	if(p1Score === winningScore){
		p1Display.style.color = "green";
		gameOver = true;	
	}
	p1Display.textContent = p1Score;	
	}
	
});

p2Button.addEventListener("click",function(){
	if(!gameOver){
	p2Score++;
	if(p2Score === winningScore){
		p2Display.style.color = "green";
		gameOver = true;	
	}
	p2Display.textContent = p2Score;	
	}
});

reset.addEventListener("click",function(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.style.color = "black";
	p2Display.style.color = "black";
	gameOver = false;
	p.textContent = 5;
	selectValue.value = "";

});

selectValue.addEventListener("change",function(){
	p.textContent = selectValue.value;
	winningScore = Number(selectValue.value);
});