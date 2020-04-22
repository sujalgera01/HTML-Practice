 alert("Welcome!");

 function isUniform(arr){
 	var init = arr[0];
 	for(var i=0; i<arr.length; i++){
 		if(arr[i]!== init){
 			return false;
 		}
 	}
 	return true;
}