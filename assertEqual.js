// // FUnction implementation
// const sum = function (a, b) {
//   return a + b;
// };

// // test code
// console.assert(sum(1, 2) === 3);
// console.assert(sum(1,20) === 3);

const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log("⛔️⛔️⛔️Assertion Failed: " + actual + " !== " + expected);
  } else if (actual === expected) {
    console.log("✅✅✅Assertion Passed: " + actual + " === " + expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Hi", "Hi");
assertEqual("Hello", "hello");
