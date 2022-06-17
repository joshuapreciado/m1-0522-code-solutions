/* exported drop */
// Define function
// ~ Defined a new function named drop with two parameters being
// array, and count
// Need an empty Array
// ~ Assigned an empty array to the variable emptyArray
// Use a loop
// ~ Used a for loop and assigned count to the index variable,
// and make the index less than the array.length, and incremented
// the index
// Make a new array
// ~ Used the push method to push the array into the emptyArray variable
// Creating a new array for the function
// Return result
// ~ Returned the emptyArray variable

function drop(array, count) {
  var emptyArray = [];
  for (var i = count; i < array.length; i++) {
    emptyArray.push(array[i]);
  }
  return emptyArray;
}
