describe('likedBy', function(){
  assert.equal(likedBy([]), "0 likes");
  assert.equal(likedBy(["Liwa", "Lindani"]), "Liked by Liwa and Lindani");
  assert.equal(likedBy(["Liwa", "Lindani", "Lindelwa"]), "Liked by Liwa and 2 others");
  assert.equal(likedBy(["Liwa", "Lindani", "Lindelwa", "Odwa", "Peter"]), "Liked by Liwa, Lindani and 3 others");

    it('check if no one liked it ', function(){
      assert.equal(likedBy([]), "0 likes");
  assert.equal(likedBy(["Liwa", "Lindani"]), "Liked by Liwa and Lindani");
  assert.equal(likedBy(["Liwa", "Lindani", "Lindelwa"]), "Liked by Liwa and 2 others");
  assert.equal(likedBy(["Liwa", "Lindani", "Lindelwa", "Odwa", "Peter"]), "Liked by Liwa, Lindani and 3 others");

        assert.deepEqual(likedBy([]), "0 likes");
    });
    it('should check if liked by 2 people ', function(){

      assert.deepEqual(likedBy(["Liwa", "Lindani"]), "Liked by Liwa and Lindani");
    });
    it('should check if liked by 3 people  ', function(){

      assert.deepEqual(likedBy(["Liwa", "Lindani", "Lindelwa"]), "Liked by Liwa and 2 others");
    });
    it('should check if liked by 5 people  ', function(){

      assert.deepEqual(likedBy(["Liwa", "Lindani", "Lindelwa", "Odwa", "Peter"]), "Liked by Liwa, Lindani and 3 others");
    });

    });
