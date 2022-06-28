var test1 = document.querySelector('#contact-form');
test1.addEventListener('submit', function (event) {
  event.preventDefault();
  var test = document.getElementById('contact-form').elements;
  console.log(test);
});
