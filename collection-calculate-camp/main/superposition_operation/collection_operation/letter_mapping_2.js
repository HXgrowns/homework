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

function getSum(total, num) {
  return total + num;
}

function average_to_letter(collection) {
  var average = collection.reduce(getSum, 0) / collection.length;
  return decTo26(Math.ceil(average));

}

module.exports = average_to_letter;

