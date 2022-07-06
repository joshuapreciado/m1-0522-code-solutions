var tabcontain = document.querySelector('.tab-container');
var tabelem = document.querySelectorAll('.tab');
var viewelem = document.querySelectorAll('.view');

tabcontain.addEventListener('click', viewHandler);

function viewHandler(event) {
  if (!event.target.matches('.tab')) {
    return;
  }

  for (var i = 0; i < tabelem.length; i++) {
    if (tabelem[i] === event.target) {
      tabelem[i].className = 'tab active';
    } else {
      tabelem[i].className = 'tab';
    }
  }

  var testview = event.target.getAttribute('data-view');

  for (var viewing = 0; viewing < viewelem.length; viewing++) {
    if (viewelem[viewing].getAttribute('data-view') !== testview) {
      viewelem[viewing].className = 'view hidden';
    } else {
      viewelem[viewing].className = 'view';
    }
  }
}
