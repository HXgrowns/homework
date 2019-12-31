'use strict';

function collect_max_number(collection) {
  return collection.reduce(compare, collection[0]);
}

function compare(total, num) {
  return total > num ? total : num;
}

module.exports = collect_max_number;
