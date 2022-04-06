const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`⛔️⛔️⛔️Assertion Failed: ${actual} !==  ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} ===  ${expected}`);
  }
};

const eqArrays = function (actual, expected) {
  // USING NOT EQUALS
  if (actual.length !== expected.length) return false;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) return false;
  }
  return true;
};
// USING EQUALS
// if (array1.length === array2.length) {
//   let isEqual = true;
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] === array2[i]) {
//       // console.log(isEqual);
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
