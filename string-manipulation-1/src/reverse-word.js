/* exported reverseWord */
function reverseWord(word) {
  var emptyString = '';
  for (var i = word.length - 1; i >= 0; i--) {
    emptyString += word[i];
  }
  return emptyString;
}
