'use strict';
var even_group_calculate_average = function (collection) {
  var evenArray = getEvenArray(collection);
  if (!evenArray.length) {
    return [0];
  }

  var erArray = [];
  for (var i = 0; i < 10; i++) {
    erArray[i] = [];
  }

  for (var i = 0; i < evenArray.length; i++) {
    var radix = calculate_radix(evenArray[i]);
    erArray[radix].push(evenArray[i]);
  }

  var result = [];
  for (var i = 0; i < erArray.length; i++) {
    if (erArray[i].length !== 0) {
      result.push(erArray[i].reduce(getSum, 0) / erArray[i].length);
    }
  }
  return result;
};

function getEvenArray(collection) {
  var evenArray = [];
  for (var i = 1; i < collection.length; i += 2) {
    if (collection[i] % 2 === 0) {
      evenArray.push(collection[i]);
    }
  }
  return evenArray;
}

function calculate_radix(num) {
  var count = 0;
  while (num) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

function getSum(total, num) {
  return total + num;
}
module.exports = even_group_calculate_average;
