const eqArrays = function (actual, expected) {
  // USING NOT EQUALS
  if (actual.length !== expected.length) return false;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) return false;
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️Assertion Failed: ${actual} !==  ${expected}`);
  }
};

// create your own map function

// map will take in 2 arguments, an array and a callback function
//  map will return a new array based on the results of the callback function

// const words = ["Buddha", "Dhamma", "Sangha", "Anicca", "Panna"];

const map = function (array, callback) {
  const results = [];
  // console.log(`Array: ${array}`);
  // console.log(`Callback: ${callback}`);
  for (const item of array) {
    // console.log("item BEFORE: ", item);
    // console.log("item AFTER: ", callback(item));
    // console.log("---");
    results.push(callback(item));
  }
  return results;
};
module.exports = map;
// const results1 = map(words, (word) => word[0]);
// console.log(results1);

// assertArraysEqual(["Buddha", "Dhamma", "Sangha", "Anicca", "Panna"], results1); //should fail
// assertArraysEqual(["B", "D", "S", "A", "P"], results1); // should pass

// const testArray1 = ["bacon", "gravy", "soda"];
// const testArray2 = [1, 2, 3];
// const testArray3 = [3, 2, 1];

// assertArraysEqual(
//   map(testArray1, (word) => word[0]),
//   ["b", "g", "s"]
// ); // should pass
// assertArraysEqual(
//   map(testArray2, (num) => num * 2),
//   [2, 4, 6]
// ); // should pass
// assertArraysEqual(
//   map(testArray3, (num) => num > 2),
//   [true, false, false]
// ); // should pass
