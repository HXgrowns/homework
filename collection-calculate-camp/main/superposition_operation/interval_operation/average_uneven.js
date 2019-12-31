'use strict';

function getSum(total, num) {
  if (num % 2 !== 0) {
    return total + num;
  }
  return total;
}

function average_uneven(collection) {
  var count = 0;
  for (var i of collection) {
    if (i % 2 !== 0) {
      count++;
    }
  }
  return collection.reduce(getSum, 0) / count;
}

module.exports = average_uneven;
