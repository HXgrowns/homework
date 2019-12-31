'use strict';

function double_to_one(collection) {
  var oneArray = collection.reduce(function (a,b) {
    return a.concat(b);
  },[]);
  var map = new Map();
  for (var i = 0, len = oneArray.length; i < len; i++) {
    map.set(oneArray[i], 1);
  }
  var result = [];
  for (var key of map.keys()) {
    result.push(key);
  }
  return result;
}

module.exports = double_to_one;
