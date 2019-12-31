'use strict';
function getEvenArray(collection) {
  var evenArray = [];
  for (var i = 1; i < collection.length; i += 2) {
    evenArray.push(collection[i]);
  }
  return evenArray;
}

function choose_no_repeat_element(collection) {
  var result = [];
  var obj = {
    attr: {}
  };
  for (var i = 0, len = collection.length; i < len; i++) {
    var value = obj.attr[collection[i]];
    if (value >= 1) {
      value++;
      for (var j = 0; j < result.length; j++) {
        if (result[j] === collection[i]) {
          result.splice(j, 1);
        }
      }
    } else {
      value = 1;
      result.push(collection[i]);
    }
    obj.attr[collection[i]] = value;
  }
  return result;
}

var single_element = function (collection) {
  var evenArray = getEvenArray(collection);
  return choose_no_repeat_element(evenArray);
};
module.exports = single_element;
