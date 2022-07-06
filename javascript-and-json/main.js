var learn = [
  {
    isbn: '0000017',
    title: 'Diary Of Wimpy Kid',
    author: 'Jeff Kinney'
  },
  {
    isbn: '0000017',
    title: 'Diary Of Wimpy Kid',
    author: 'Jeff Kinney'
  },
  {
    isbn: '0000011',
    title: 'Test',
    author: 'Bob'
  }
];
console.log(learn);
console.log(typeof learn);

var testlearn = JSON.stringify(learn);
console.log(testlearn);
console.log(typeof testlearn);

var student = '{"id":1717, "name":"joshua preciado"}';
console.log(student);
console.log(typeof student);

var finalstudent = JSON.parse(student);
console.log(finalstudent);
console.log(typeof finalstudent);
