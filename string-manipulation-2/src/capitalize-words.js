/* exported capitalizeWords */
// Define function
// ~ Defined a new function named capitalizewords with one parameter being
// a string.
// Return a string with first letter of the word capitalized
// ~ 1. Make the parameter string lowercase and then split the string
//      with empty quotations and assign it to a variable
//   2. Use a for loop with the variable test1 included as the length of the loop
//   3. Within the loops code block, use the slice method with one arguement
//      being 1, and method being called by the test1[i] object which is
//      being concatinated with the Uppercase method and charAt method
//      of the test1[i] object which is being assigned to the test1[i] variable.
//   4. return the variable test1 with the join method to make the
//      strings into one.

function capitalizeWords(string) {
  var test1 = string.toLowerCase().split(' ');
  for (var i = 0; i < test1.length; i++) {
    test1[i] = test1[i].charAt(0).toUpperCase() + test1[i].slice(1);
  }
  return test1.join(' ');
}
