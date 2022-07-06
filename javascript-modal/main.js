var bluebutton = document.querySelector('.bluebutton');
var modal = document.querySelector('.container');
var nobutton = document.querySelector('.nobutton');

bluebutton.addEventListener('click', function () {
  modal.classList.add('active-background');
});

nobutton.addEventListener('click', function () {
  modal.classList.remove('active-background');
});
