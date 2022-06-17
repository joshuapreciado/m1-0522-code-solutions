/* exported take */
// Define function
// ~ Defined a new function named take with two parameters
// an array, and a count
// Create an empty array
// ~ Created an emptyArray being assigned to the variable emptArray
// Use a loop
// ~ Used a for loop that ends once the count parameter ends
// Push the array into new array
// ~ Used the push method of the emptyArray object to insert the old array
// into the new one
// Check if there is an empty array
// ~ Checked for an empty array and returned an empty array

function take(array, count) {
  var emptArray = [];
  for (var i = 0; i < count; i++) {
    emptArray.push(array[i]);
  }
  if (array <= []) {
    return [];
  }
  return emptArray;
}
