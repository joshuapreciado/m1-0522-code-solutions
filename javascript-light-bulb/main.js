var ContainerBulb = document.querySelector('.container');
var bulb = document.querySelector('.light-button');
bulb.addEventListener('click', lightBulb);
function lightBulb(event) {
  if (bulb.className === 'light-button circle') {
    bulb.className = 'light-button ' + 'black';
    ContainerBulb.className = 'container ' + 'black';
  } else {
    bulb.className = 'light-button ' + 'circle';
    ContainerBulb.className = 'container ' + 'white';
  }
}
