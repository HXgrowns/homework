'use strict';

function get_integer_interval_2(number_a, number_b) {
  var min = number_a;
  var max = number_b;
  var result = [];
  if (number_a > number_b) {
    min = number_b;
    max = number_a;
  } 
  for (var i = min; i <= max; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  if (number_a > number_b) {
    result.reverse();
  }
  return result;
}

module.exports = get_integer_interval_2;
