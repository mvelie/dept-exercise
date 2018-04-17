describe('grandTotal', function(){

  var toiletrydepartment ={name : 'toiletries',total: 5007}
  var grocerydepartment ={name : 'groceery',total :11089}
  var phamacydepartment ={name : 'phamacy',total :7321}
  var bakerydepartment ={name : 'bakery',total :10073}
  var bucherydepartment ={name :'buchery',total:9053}

    it('should  if the function calculated the correct total ', function(){
      var toiletrydepartment ={name : 'toiletries',total: 5007}
      var grocerydepartment ={name : 'groceery',total :11089}
      var phamacydepartment ={name : 'phamacy',total :7321}
      var bakerydepartment ={name : 'bakery',total :10073}
      var bucherydepartment ={name :'buchery',total:9053}

        assert.deepEqual(grandTotal(grandTotal,42543));
    });
    it('should  return check if the list budget is correct ', function(){
      var toiletrydepartment ={name : 'toiletries',total: 5007}
      var grocerydepartment ={name : 'groceery',total :11089}
      var phamacydepartment ={name : 'phamacy',total :7321}
      var bakerydepartment ={name : 'bakery',total :10073}
      var bucherydepartment ={name :'buchery',total:9053}

      assert.deepEqual(grandTotal(42543),grandTotal(budget));
    });
    it('should  check if the dept totals are correct ', function(){
      var toiletrydepartment ={name : 'toiletries',total: 5007}
      var grocerydepartment ={name : 'groceery',total :11089}
      var phamacydepartment ={name : 'phamacy',total :7321}
      var bakerydepartment ={name : 'bakery',total :10073}
      var bucherydepartment ={name :'buchery',total:9053}

      assert.deepEqual(grandTotal(grandTotal,(total)));
    });

    });
