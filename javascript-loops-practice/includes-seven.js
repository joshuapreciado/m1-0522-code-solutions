/* exported includesSeven */
function includesSeven(array) {
  // eslint-disable-next-line no-unused-vars
  var emptyArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
