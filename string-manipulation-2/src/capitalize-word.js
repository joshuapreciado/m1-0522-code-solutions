/* exported capitalizeWord */
// Define function
//  ~ Defined a new function named capitalizeword with one parameter of
// word.
// Make sure that javascript = JavaScript
//  ~ Implemented an if statement with the expression lowercase method of
// the word object is strictly equal to the string javascript then return
// the string 'JavaScript'.
// Capitalize all other words
//  ~ Used an else if statement to continue the check with an expression of
// word, and the code block containing the methods charAt, toUpperCase,
// toLowerCase, and slice to make sure that the first letter is a capital
// of every word.

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else if (word) {
    return word.charAt().toUpperCase() + word.toLowerCase().slice(1);
  }
}
