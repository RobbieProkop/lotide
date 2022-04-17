const assertArraysEqual = require("./lib/assertArraysEqual");
const eqArrays = require("./lib/eqArrays");

let flatArr = [];
const flatten = (array) => {
  array.forEach((element) => {
    if (Array.isArray(element)) {
      flatten(element);
    } else {
      flatArr.push(element);
    }
  });
  return flatArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));

// const arr = [1, 2, [3, 4], 5, [6]];
// console.log(typeof arr);
