var btn = document.querySelector("button");
var body = document.querySelector("body");
var h1 = document.querySelector("h1");
var isGrey = false;

btn.addEventListener("click", press);

function press(){
	if(isGrey){
	body.style.background = "#34495e";
	h1.style.color = "#fff";
	}
	else{
		body.style.background = "#fff";
		h1.style.color = "#000";
	}
	isGrey = !isGrey;
}