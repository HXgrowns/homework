'use strict';

function collect_min_number(collection) {
  return collection.reduce(compare, collection[0]);
}

function compare(total, num) {
  return total < num ? total : num;
}

module.exports = collect_min_number;

