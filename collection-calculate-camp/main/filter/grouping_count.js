'use strict';

function grouping_count(collection) {
  var obj = {
    attr:{}
  };
  for (var i = 0, len = collection.length; i < len; i++) {
    var value = obj.attr[collection[i]];
    if (value >= 1) {
      value++;
    } else {
      value = 1;
    }
    obj.attr[collection[i]] = value;
  }
  return obj.attr;
}

module.exports = grouping_count;
