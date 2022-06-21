function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
var buttonTest = document.querySelector('.click-button');
buttonTest.addEventListener('click', handleClick);

function handleMouserover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
var buttonHoveredTest = document.querySelector('.hover-button');
buttonHoveredTest.addEventListener('mouseover', handleMouserover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
var buttonDoubleClicked = document.querySelector('.double-click-button');
buttonDoubleClicked.addEventListener('dblclick', handleDoubleClick);
