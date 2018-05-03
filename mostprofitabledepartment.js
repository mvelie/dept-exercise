function mostProfitable(dept){

var most =[];
for (var i = 0; i <dept.length; i++) {
  most.push(dept[i].total)
  var profite=Math.max.apply(null, most);
  if(profite === dept[i].total){
    var list =dept[i].name;
  }
}
 return list;
}
