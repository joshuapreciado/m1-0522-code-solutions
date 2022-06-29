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

var test1 = document.querySelector('#user-name');
var test2 = document.querySelector('#user-email');
var test3 = document.querySelector('#user-message');

test1.addEventListener('focus', handleFocus);
test1.addEventListener('blur', handleBlur);
test1.addEventListener('input', handleInput);

// For blur
test2.addEventListener('focus', handleFocus);
test2.addEventListener('blur', handleBlur);
test2.addEventListener('input', handleInput);

// For Input
test3.addEventListener('focus', handleFocus);
test3.addEventListener('blur', handleBlur);
test3.addEventListener('input', handleInput);
