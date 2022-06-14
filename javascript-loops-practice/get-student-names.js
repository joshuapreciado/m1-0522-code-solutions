/* exported getStudentNames */
function getStudentNames(students) {
  var emptyArray = [];
  for (var i = 0; i < students.length; i++) {
    emptyArray.push(students[i].name);
  }
  return emptyArray;
}
