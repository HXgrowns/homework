'use strict';
var letters = ["z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"];

function decTo26(num) {
  var data = [];
  while (num > 0) {
    var mod = num % 26;
    num = Math.floor(num / 26);
    if (mod === 0 && num > 0) {
      num--;
    }
    data.unshift(letters[mod]);
  }
  return data.join("");
}

function get_letter_interval_2(number_a, number_b) {
  var result = [];
  var min = number_a;
  var max = number_b;
  if (number_a > number_b) {
    min = number_b;
    max = number_a;
  }
  for (var i = min; i <= max; i++) {
    var output = decTo26(i);
    result.push(output);
  }
  if (number_a > number_b) {
    result.reverse();
  }
  return result;
}

module.exports = get_letter_interval_2;

