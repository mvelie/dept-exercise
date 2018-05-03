describe('mostProfitable',function(){

it('should determine which of their department are most profitable',function(){
var list = [
            {"name":"Butchery","total":6001},
            {"name":"Bakery","total":7801},
            {"name":"Fresh fruits","total":4519}]

assert.deepEqual(mostProfitable(7801,(list)))


});
it('should determine the lowest mostProfitable',function(){
var list = [
            {"name":"Butchery","total":6001},
            {"name":"Bakery","total":7801},
            {"name":"Fresh fruits","total":4519}]

assert.deepEqual(mostProfitable(4519,(list)))


  });
  it('should calculate the totals  mostProfitable',function(){
  var list = [
              {"name":"Butchery","total":6001},
              {"name":"Bakery","total":7801},
              {"name":"Fresh fruits","total":4519}]

  assert.deepEqual(mostProfitable(18321,(list)))


    });

});
