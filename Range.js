

var range = function(start, end) {

  var result = [];

  var recurse = function(num) {
    if (num === end) {
      return;
    }
    result.push(num);
    recurse(num+1);
  };

  recurse(start+1);
  return result;
};