/* exported setValue */
// Define function
// ~ Created new function named setValue with three parameters
// an object, a key, and a value
// Does not need to return
// ~ Assign value to the object at key and assign that to
// the testTwo variable
// Test Code
// ~ Console log method to test out code

function setValue(object, key, value) {
  var testTwo = object[key] = value;
  // eslint-disable-next-line no-console
  console.log('TestRun:', testTwo);
}
