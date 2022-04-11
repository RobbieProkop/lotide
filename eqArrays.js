const eqArrays = function (actual, expected) {
  // USING NOT EQUALS
  if (actual.length !== expected.length) return false;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) return false;
  }
  return true;
};
module.exports = eqArrays;

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
