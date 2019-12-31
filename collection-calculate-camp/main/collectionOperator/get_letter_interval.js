'use strict';

function get_letter_interval(number_a, number_b) {
  var result = [];
  var min = number_a;
  var max = number_b;
  if (number_a > number_b) {
    min = number_b;
    max = number_a;
  }
  for (var i = min; i <= max; i++) {
    result.push(String.fromCharCode(i + 96));
  }
  if (number_a > number_b) {
    result.reverse();
  }
  return result;
}

module.exports = get_letter_interval;
