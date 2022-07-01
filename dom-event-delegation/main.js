var list = document.querySelector('.task-list');
list.addEventListener('click', function (event) {
  console.log(event.target);
  console.log(event.target.tagName);
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  var tasklist = event.target.closest('.task-list-item');
  console.log(tasklist);
  tasklist.remove();
});
