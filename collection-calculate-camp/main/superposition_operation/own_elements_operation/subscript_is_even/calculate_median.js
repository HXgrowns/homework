'use strict';
function compute_median(collection) {
  collection.sort((x, y) => x - y);

  if (collection.length === 0) {
    return 0;
  } else if (collection.length % 2 === 1) {
    return Math.ceil(collection[Math.floor(collection.length / 2)]);
  } else {
    var i = collection.length / 2;
    return Math.ceil((parseFloat(collection[i - 1]) + parseFloat(collection[i])) / 2);
  }
}
var calculate_median = function (collection) {
  var evenArray = [];
  for (var i = 1; i < collection.length; i += 2) {
    evenArray.push(collection[i]);
  }
  return compute_median(evenArray);
};
module.exports = calculate_median;
