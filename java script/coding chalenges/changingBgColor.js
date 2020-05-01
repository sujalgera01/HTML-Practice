var body = document.querySelector("body");
var isBlue = false;


setInterval(function(){
	if(isBlue){
		body.style.background = "#fff";
	}
	else{
		body.style.background = "#0abde3";	
	}
	isBlue = !isBlue;
}, 1000);