/* exported truncate */
// Define function
//  ~Defined a new function named truncate with 2 parameters
// length and string
// Cuts down string to the length and adds an ellipis at the end of
// the string
// ~ Added a return statement with an ellipis being concatinated
// with length, in which the slicing begins at index 0 and ends at
// length. This is the slice method of the string object.

function truncate(length, string) {
  return string.slice(0, length) + '...';
}
