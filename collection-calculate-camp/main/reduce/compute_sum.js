'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce(getSum, 0);
}

function getSum(total, num) {
  return total + num;
}

module.exports = calculate_elements_sum;

