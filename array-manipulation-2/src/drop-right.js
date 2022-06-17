/* exported dropRight */

function dropRight(array, count) {
  var emptyArray = [];
  for (var i = 0; i < array.length - count; i++) {
    emptyArray.push(array[i]);
  }
  return emptyArray;
}
