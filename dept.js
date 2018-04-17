console.log('mvelie')

var toiletrydepartment ={name : 'toiletries',total: 5007}
var grocerydepartment ={name : 'groceery',total :11089}
var phamacydepartment ={name : 'phamacy',total :7321}
var bakerydepartment ={name : 'bakery',total :10073}
var bucherydepartment ={name :'buchery',total:9053}

var budget =[];
budget.push( toiletrydepartment);
budget.push(grocerydepartment);
budget.push(phamacydepartment);
budget.push( bakerydepartment);
budget.push( bucherydepartment);

for (var i = 0; i < budget.length; i++) {
  console.log(budget[i].name);
  console.log(budget[i].total);
}

function grandTotal(budget) {
console.log(budget);
}

grandTotal(budget)

var total =0;
for (var i = 0; i < budget.length; i++) {
  total += (budget[i].total);
}
console.log(total);
