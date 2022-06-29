var test1 = document.querySelector('#contact-form');
test1.addEventListener('submit', function (event) {
  event.preventDefault();
  var test = document.getElementById('contact-form').elements.name.value;
  console.log('test:', test);
  var test2 = document.getElementById('contact-form').elements.email.value;
  console.log('test:', test2);
  var test3 = document.getElementById('contact-form').elements.message.value;
  console.log('test:', test3);
  var dataValue = {
    name: test,
    email: test2,
    message: test3
  };
  console.log('Value of Data Value: ', dataValue);
});
