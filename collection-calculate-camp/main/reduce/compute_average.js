'use strict';

function compute_average(collection) {
  var sum = collection.reduce(getSum, 0);
  return sum / collection.length;
}

function getSum(total, num) {
  return total + num;
}

module.exports = compute_average;

