/* exported countdown */
function countdown(number) {
  var emptyArray = [];
  while (number >= 0) {
    emptyArray.push(number);
    number--;
  }
  return emptyArray;
}
