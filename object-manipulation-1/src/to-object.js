/* exported toObject */
function toObject(keyValuePair) {
  var randomObject = {
    [keyValuePair[0]]: keyValuePair[1]
  };
  return randomObject;
}
