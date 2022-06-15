/* exported reverse */
function reverse(array) {
  var emptyArray = [];
  for (var i = array.length - 1; i > -1; i--) {
    emptyArray.push(array[i]);
  }
  return emptyArray;
}
