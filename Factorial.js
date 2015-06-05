var getFactorial = function(n) {
  if (n === 0) {
    return 1;
  }

  return n * getFactorial(n-1);
};