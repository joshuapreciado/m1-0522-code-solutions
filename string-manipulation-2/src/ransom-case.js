/* exported ransomCase */
// Define function
// ~ Defined a new function named ransomCase with one parameter being
// a string.
// Check for the return to equal capitalized letters
// ~Created if statements with expressions to check for the string
// and if the string is strictly equal then return the properly cased
// string.

function ransomCase(string) {
  var test1 = string.toLowerCase().split('');
  for (var i = 1; i < test1.length; i += 2) {
    test1[i] = test1[i].toUpperCase();
  }
  return test1.join('');
}
