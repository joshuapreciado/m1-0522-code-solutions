/* exported numVowels */
function numVowels(string) {
  var vowelCount = 'aeiou';
  var vowelResult = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowelCount.includes(string[i].toLowerCase())) {
      vowelResult++;
    }
  }
  return vowelResult;
}
