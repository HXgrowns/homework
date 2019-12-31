'use strict';
var even_asc_odd_desc = function(collection){
  var evenArray = [];
  var oddArray = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 === 0) {
      evenArray.push(collection[i]);
    } else {
      oddArray.push(collection[i]);
    }
  }
  evenArray.sort((a,b)=>{return a-b});
  oddArray.sort((a,b)=>{return b-a});
  return evenArray.concat(oddArray);
};
module.exports = even_asc_odd_desc;
