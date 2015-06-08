Array.prototype.binarySearchRecurse = function(target) {
  var half = Math.floor(this.length/2);

  if (target === this[half]) {
    return half;
  } else if (this.length === 1) {
    return null;
  }

  if (target > this[half]) {
    return this.splice(half, this.length).binarySearchRecurse(target);
  } else {
    return this.splice(0, half).binarySearchRecurse(target);
  }
};