
function currentTime() {
  var date = new Date(); 
  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var frmat = "AM";

  frmat = (hr >= 12) ? "PM" : "AM";
  hr = (hr == 0) ? 12 : ((hr > 12) ? (hr - 12): hr);
  hr = updateTime(hr);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hr + " : " + min + " : " + sec + " " + frmat;
    var t = setTimeout(currentTime, 1000);
}

function updateTime(i) { 
  if (i < 10) {
    return "0" + i;
  }
  else {
    return i;
  }
}
currentTime();