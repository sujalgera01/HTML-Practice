function showLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition);
	}
	else{
		alert("Your browser does not support geolocation");
	}

	function showPosition(position){
		alert("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
	}
}