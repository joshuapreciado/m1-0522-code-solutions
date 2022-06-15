/* exported compact */
function compact(array) {
  var emptyArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      emptyArray.push(array[i]);
    }
  }
  return emptyArray;
}
