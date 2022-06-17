/* exported chunk */
function chunk(array, size) {
  var emptyArray = [];
  for (var i = 0; i < array.length; i += size) {
    var test1 = array.slice(i, i + size);
    emptyArray.push(test1);
  }
  return emptyArray;
}
