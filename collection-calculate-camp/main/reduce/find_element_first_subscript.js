'use strict';

function calculate_elements_sum(collection, element) {
  var index = "没找到";
  for (var i of collection) {
    if (collection[i] === element) {
      index = i;
      return index;
    }
  }
  return index;
}

module.exports = calculate_elements_sum;

