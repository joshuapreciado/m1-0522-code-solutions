/* exported last */
// Define the function
//  ~ Defined function lastArray - Completed
// Create a variable with an empty array
//  ~ Created emptyArray variable with an empty array - Completed
// Use the push method
//  ~ Push the array into the emptyArray - Completed
// Subtract - 1 from the array
//  ~ Subtracted - 1 from the array.length to target last index in array - Completed
// Return emptyArray
//  ~ Returned array with the index of 0 - Completed
function last(array) {
  var emptyArray = [];
  emptyArray.push(array[array.length - 1]);
  return emptyArray[0];
}
