'use strict';

function calculate_elements_sum(collection, element) {
  var index = "没找到";
  for (var i = 0, len = collection.length; i < len; i++) {
    if (collection[i] === element) {
      index = i;
    }
  }
  return index;
}

module.exports = calculate_elements_sum;
