/* exported filterOutStrings */
function filterOutStrings(values) {
  var emptyArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      emptyArray.push(values[i]);
    }
  }
  return emptyArray;
}
