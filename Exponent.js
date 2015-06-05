

var getExponent = function(base, exponent) {
  if (exponent === 1) {
    return base;
  }
  //base case
  return base * getExponent(base, exponent-1);
};