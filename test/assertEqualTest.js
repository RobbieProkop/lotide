const assertEqual = require("../lib/assertEqual");

// FUnction implementation
const sum = function (a, b) {
  return a + b;
};

// // test code
// console.assert(sum(1, 2) === 3);
// console.assert(sum(1, 20) === 3);

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Hi", "Hi");
assertEqual("Hello", "hello");
