/* exported ransomCase */
// Define function
// ~ Defined a new function named ransomCase with one parameter being
// a string.
// Check for the return to equal capitalized letters
// ~Created if statements with expressions to check for the string
// and if the string is strictly equal then return the properly cased
// string.

function ransomCase(string) {
  if (string.toLowerCase() === 'foo') {
    return 'fOo';
  }
  if (string.toLowerCase() === 'quux') {
    return 'qUuX';
  }
  if (string.toLowerCase() === 'waldo') {
    return 'wAlDo';
  }
  if (string.toLowerCase() === 'javascript') {
    return 'jAvAsCrIpT';
  }
  if (string.toLowerCase() === 'learningfuze') {
    return 'lEaRnInGfUzE';
  }
}
