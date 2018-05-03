describe(' mostProfitableDay', function(){

  var dataset = [
{
    name : "Bakery",
    total : 7801,
    day : "Monday"
},{
    name : "Butchery",
    total : 4426,
    day : "Wednesday"
},{
    name : "Bakery",
    total : 9976,
    day : "Tuesday"
},{
    name : "Pharmacy",
    total : 5648,
    day : "Friday"
}];
    it('should check which day made high profite ', function(){
      var dataset = [
      {
          name : "Bakery",
          total : 7801,
          day : "Monday"
      },{
          name : "Butchery",
          total : 4426,
          day : "Wednesday"
      },{
          name : "Bakery",
          total : 9976,
          day : "Tuesday"
      },{
          name : "Pharmacy",
          total : 5648,
          day : "Friday"
      }];
        assert.deepEqual( mostProfitableDay('Tuesday',9976));
    });
    it('should  check the day with lower profite ', function(){

      assert.deepEqual( mostProfitableDay("Wednesday"));
    });
    it('should  check if the dept totals are correct ', function(){

      assert.deepEqual( mostProfitableDay(27851));
    });

    });
