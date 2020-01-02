function count_same_elements(collection) {
  var result = [];
  for (var i = 0, len = collection.length; i < len; i++) {
    var obj = {};
    obj.name = collection[i].match(/[a-z]/g)[0];
    for (var j = 0, len2 = result.length; j < len2; j++) {
      if (result[j].name === obj.name) {
        result[j].summary += parseInt(collection[i].match(/[0-9]*/g)[2]) || 1;
        obj.summary = result[j].summary;
        break;
      }
    }
    if (!obj.summary) {
      obj.summary = parseInt(collection[i].match(/[0-9]*/g)[2]) || 1;
      result.push(obj);
    }
  }
  return result;
}

module.exports = count_same_elements;
