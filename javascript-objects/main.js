var student = {
  firstName: 'Joshua',
  lastName: 'Preciado',
  age: 19
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'server';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'BMW',
  model: 'M4',
  year: '2018'
};

vehicle.color = 'White';
vehicle.isConvertible = false;
console.log('value of vehicle["color"]:', vehicle.color);
console.log('value of vehicle["isConvertible"]:', vehicle.isConvertible);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Sage',
  type: 'Pug'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
