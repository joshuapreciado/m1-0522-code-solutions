/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  string = string.split('');
  var test = string[firstIndex];
  string[firstIndex] = string[secondIndex];
  string[secondIndex] = test;
  var test2 = string.join('');
  return test2;
}
