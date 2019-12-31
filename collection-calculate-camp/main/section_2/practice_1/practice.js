function count_same_elements(collection) {
  var result = [];
  for (var i = 0, len = collection.length; i < len; i++) {
    var obj = {};
    obj.key = collection[i];
    for (var j = 0; j < result.length; j++) {
      if (result[j].key === obj.key) {
        result[j].count++;
        obj.count = result[j].count;
        break;
      }
    }
    if (!obj.count) {
      obj.count = 1;
      result.push(obj);
    }
  }
  return result;
}

module.exports = count_same_elements;
