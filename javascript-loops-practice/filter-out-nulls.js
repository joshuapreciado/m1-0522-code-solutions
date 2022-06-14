/* exported filterOutNulls */
function filterOutNulls(values) {
  var emptyArray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      emptyArray.push(values[i]);
    }
  }
  return emptyArray;
}
