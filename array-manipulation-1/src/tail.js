/* exported tail */
// Define Function
//  ~ Defineed a new function named tail with 1 parameter of
// array - Completed
// Create a variable with an empty array
//  ~ An empty array being assigned to the variable
// emptyArray - Completed
// Create for loop
//  ~ Created a for loop with number 1 being assigned
// to variable i(index) followed by index being less than
// array.length and the index being incremented within
// the expression - Completed
// Push the array
//  ~ Pushed the array at index inside the emptyArray variable
// Return result
// ~ Returned the emptyArray variable

function tail(array) {
  var emptyArray = [];
  for (var i = 1; i < array.length; i++) {
    emptyArray.push(array[i]);
  }
  return emptyArray;
}
