/* exported takeRight */
// Define function
// ~ Defined a new function named takeRight with two parameters
// array and count
// Create an empty Array
// ~ empty array being assigned to emptyArray variable
// Use a loop
// ~ Created a for loop with count being subtracted from the length property
// of the array object which is being assigned to the index variable
// and the length property of the array object is greater than the index
// index is being incremented
// Complete a check for i
// ~ Checked if i is less than 0 and assigned -1 to the variable i
function takeRight(array, count) {
  var emptyArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (i < 0) {
      i = -1;
      continue;
    }
    emptyArray.push(array[i]);
  }
  return emptyArray;
}
