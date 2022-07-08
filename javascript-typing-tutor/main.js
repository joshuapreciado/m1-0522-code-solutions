
var spantest = document.querySelectorAll('span');
var empty = 0;

spantest[empty].classList.add('underline');

document.addEventListener('keydown', function (event) {
  if (event.key === spantest[empty].textContent) {
    spantest[empty].classList.remove('underline', 'red', 'underlinebad');
    spantest[empty].classList.add('green');
    empty++;
    spantest[empty].classList.add('underline');
  } else {
    spantest[empty].classList.add('red', 'underlinebad');
  }
});
