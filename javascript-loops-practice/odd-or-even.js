/* exported oddOrEven */
function oddOrEven(numbers) {
  var emptyArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
      emptyArray.push('even');
    } else if (numbers[i] % 2) {
      emptyArray.push('odd');
    }
  }
  return emptyArray;
}
