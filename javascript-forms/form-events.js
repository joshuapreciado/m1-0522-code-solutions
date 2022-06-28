function handleFocus(event) {
  console.log('Focus event fired');
  console.log(event.target);
}

function handleBlur(event) {
  console.log('Blur event fired');
  console.log(event.target);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

var test1 = document.querySelector('input');
var test2 = document.querySelector('input');
var test3 = document.querySelector('textarea');

test1.addEventListener('focus', handleFocus);
test2.addEventListener('blur', handleBlur);
test3.addEventListener('input', handleInput);
