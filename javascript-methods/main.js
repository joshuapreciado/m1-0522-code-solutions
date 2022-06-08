var one = 20;
var two = 30;
var three = 40;
var maximumValue = Math.max(one, two, three);
console.log('maximumValue:', maximumValue);

var heroes = ['Batman', 'Superman', 'Deadpool', 'The Homelander'];
var randomNumber = (Math.random() * heroes.length);
var randomIndex = Math.floor(randomNumber);
console.log('Value of randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('Value of randomHero:', randomHero);

var library = [
  {
    title: 'Book1',
    author: 'Simpson'
  },
  {
    title: 'Book2',
    author: 'SimpsonBrother'
  },
  {
    title: 'Book3',
    author: 'SimpsonStepBrother'
  }
];
var lastBook = library.pop();
console.log('Value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('Value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of Library:', library);

var fullName = 'Joshua Preciado';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Value of sayMyName:', sayMyName);
