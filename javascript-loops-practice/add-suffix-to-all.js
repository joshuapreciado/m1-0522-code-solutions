/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var emptyArray = [];
  for (var i = 0; i < words.length; i++) {
    emptyArray.push(words[i] + suffix);
  }
  return emptyArray;
}
