var test1 = document.querySelector('#contact-form');
test1.addEventListener('submit', function (event) {
  event.preventDefault();
  var test = document.getElementById('contact-form').elements.name.value;
  var test2 = document.getElementById('contact-form').elements.email.value;
  var test3 = document.getElementById('contact-form').elements.message.value;
  var sum = test + test2 + test3;
  console.log(sum);
});
