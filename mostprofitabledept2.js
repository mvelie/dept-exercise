function mostProfitableDepartment(most){
  //console.log(most);
var dept = [];
for (var i=0; i<most.length; i++) {
  dept.push(most[i].total)
  var profite = Math.max.apply(null, dept);
  if(profite === most[i].total){
    var mostname  = most[i].name;
    return mostname;
  }
}

}  
