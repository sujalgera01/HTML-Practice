function average(scores){
    var sum = 0;
    scores.forEach(function(score){
        sum+=score;
    });
  var avg = sum/(scores.length);
   return Math.round(avg);
//   console.log(avg);

}

var score1 = [10, 20, 30, 40, 50];
console.log(average(score1));


var score2 = [40,65,77,82,80,54,73,63,95,49];
console.log(average(score2));