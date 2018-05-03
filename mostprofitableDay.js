function mostProfitableDay(Day){
  console.log(Day);
var most = [];
for (var i = 0; i <Day.length; i++) {
  most.push(Day[i].total)
  var profite=Math.max.apply(null, most);
  if(profite === Day[i].total){
    var mostday =Day[i].day;
  }
}
  console.log(mostday);
 return mostday;
}  
