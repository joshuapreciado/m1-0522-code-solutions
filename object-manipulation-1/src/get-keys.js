/* exported getKeys */
// Define function
// ~ Defined a new function named getKeys with one parameter
// being object
// Create a empty array
// ~ An empty array is being assigned to the variable
// emptyArray
// Access key in object
// ~ Created a for statement with an expression of
// var key in object & pushed the key into the
// emptyArray variable
// Return Result
// ~ Returned the emptyArray variable

function getKeys(object) {
  var emptyArray = [];
  for (var key in object) {
    emptyArray.push(key);
  }
  return emptyArray;
}
