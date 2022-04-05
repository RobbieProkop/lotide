const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`⛔️⛔️⛔️Assertion Failed: ${actual} !==  ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} ===  ${expected}`);
  }
};
let head = function (array) {
  // if (array === []) {
  //   array = undefined;
  // } else console.log(array[0]);
  if (array !== []) {
    return array[0];
  } else console.log(undefined);
};
head([5, 6, 7]);
assertEqual(head([5]), 5);
