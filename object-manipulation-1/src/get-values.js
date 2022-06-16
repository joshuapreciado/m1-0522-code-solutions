/* exported getValues */
function getValues(object) {
  var emptyArray = [];
  for (var key in object) {
    emptyArray.push(object[key]);
  }
  return emptyArray;
}
