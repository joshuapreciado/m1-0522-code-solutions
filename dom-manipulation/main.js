var numberTime = 0;
var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');
hotButton.addEventListener('click', clickOperator);

function clickOperator(event) {
  numberTime++;
  var temp;
  if (numberTime < 4) {
    temp = 'cold';
  } else if (numberTime < 7) {
    temp = 'cool';
  } else if (numberTime < 10) {
    temp = 'tepid';
  } else if (numberTime < 13) {
    temp = 'warm';
  } else if (numberTime < 16) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }
  hotButton.className = 'hot-button ' + temp;
  clickCount.textContent = 'Clicks:' + numberTime;
}
