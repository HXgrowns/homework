'use strict';
function getSum(total, num) {
  return total + (num * 3 + 2);
}

function hybrid_operation(collection) {
  return collection.reduce(getSum, 0);
}

module.exports = hybrid_operation;

