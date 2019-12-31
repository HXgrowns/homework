'use strict';

function compute_chain_median(collection) {
  var strs = collection.split("->");
  strs.sort((x, y) => x - y);

  if (strs.length === 0) {
    return 0;
  } else if (strs.length % 2 === 1) {
    return parseFloat(strs[Math.floor(strs.length / 2)]);
  } else {
    var i = strs.length / 2;
    return (parseFloat(strs[i - 1]) + parseFloat(strs[i])) / 2;
  }
}

module.exports = compute_chain_median;
