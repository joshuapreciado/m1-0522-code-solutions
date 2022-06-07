function convertMinutesToSeconds(minutes) {
  return 60 * minutes;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult', convertMinutesToSecondsResult);

function greet(name) {
  return 'Hey, ' + name;
}

var greetResult = greet('Beavis');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  return width * height;
}

var getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  person.firstName;
  person.lastName;
  return person.firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstName Result:', getFirstNameResult);

function getLastElement(array) {
  var last = array.length - 1;
  var lastElement = array[last];
  return lastElement;
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElement Result:', getLastElementResult);
