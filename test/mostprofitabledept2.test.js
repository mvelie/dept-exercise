describe('mostProfitableDepartment', function(){
var dataset = [
{
    name : "Bakery",
    total : 7801
},{
    name : "Butchery",
    total : 4426
},{
    name : "Bakery",
    total : 9976
},{
    name : "Pharmacy",
    total : 5648
}];
it(' should check which department make the most profitable', function(){
      assert.deepEqual(mostProfitableDepartment(dataset),'Bakery' );
    });
      it('should calculate the total of the dataset', function(){
            assert.notDeepEqual(mostProfitableDepartment('total'),308151 );
});
it(' determine which department make lowest profit', function(){
  assert.notDeepEqual(mostProfitableDepartment('Butchery'),4426);

});

});
