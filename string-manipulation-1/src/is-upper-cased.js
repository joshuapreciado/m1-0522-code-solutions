/* exported isUpperCased */
// Define Function
// ~ Defined a new function named isUpperCased
// with one parameter being word - Completed
// If Statement
// ~ Created an if statement with the expression
// word is less than or equal to the toUpperCase method of
// the object word
// Return true if word is less than or equal to
// ~ Return statement with a true boolean - Completed
// Return false if word is less than or equal to lowercase
// method of word object
// ~ Return with a boolean of false if word is less than or equal
// to lowercase method of word object

function isUpperCased(word) {
  if (word <= word.toUpperCase()) {
    return true;
  } else if (word <= word.toLowerCase()) {
    return false;
  }
}
