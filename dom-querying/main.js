console.log('hello, world');
var test1 = document.querySelector('h1');
console.log('$heading', test1);
console.dir(test1);

var test2 = document.querySelector('#explanation');
console.dir(test2);

var test3 = document.querySelector('.hint');
console.dir(test3);

var test4 = document.querySelectorAll('p');
console.log(test4);

var test5 = document.querySelectorAll('.example-link');
console.log(test5);
