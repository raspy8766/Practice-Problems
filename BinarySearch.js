Array.prototype.binarySearchRecurse = function(val) {
  
  var initArray = this.slice();
  var result;

  var recurse = function(firstHalf) {

    if (firstHalf.length === 1) {
      result = firstHalf[0] === val;
      return;
    }


    if (firstHalf.length % 2 === 0) {
      var arrayHalfIndex = firstHalf.length/2;
    } else {
      var arrayHalfIndex = Math.floor(firstHalf.length/2);
    }

    var secondHalf = firstHalf.splice(arrayHalfIndex, firstHalf.length - 1);

    if (val < secondHalf[0]) {
      if (firstHalf[0] === val) {
        result = true
        return;
      }
      recurse(firstHalf);
    } else {
      if (secondHalf[0] === val) {
        result = true;
        return;
      }
      recurse(secondHalf);
    }
  }
  recurse(initArray);

  return result;
};


  //val = 3
  //[1,2,3,4,5]
  // [1,2,3] & [4,5]
  //val < [4,5][0] === true
  //call recursion with firstHalf
  //[1] & [2,3]
  //val < [2,3][0] === false
  //call recursion with secondHalf
  //[3] & [2]
  //val === [2][0]


  // var firstHalf = this.slice();
  // var secondHalf;