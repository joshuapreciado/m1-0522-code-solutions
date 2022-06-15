/* exported initial */
// Define function

function initial(array) {
  var emptyArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    emptyArray.push(array[i]);
  }
  return emptyArray;
}
