'use strict';

function compute_median(collection) {
  collection.sort((x, y) => x - y);

  if (collection.length === 0) {
    return 0;
  } else if (collection.length % 2 === 1) {
    return parseFloat(collection[Math.floor(collection.length / 2)]);
  } else {
    var i = collection.length / 2;
    return (parseFloat(collection[i - 1]) + parseFloat(collection[i])) / 2;
  }
}

module.exports = compute_median;


