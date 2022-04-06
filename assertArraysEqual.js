const eqArrays = function (actual, expected) {
  // USING NOT EQUALS
  if (actual.length !== expected.length) return false;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) return false;
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  // USING NOT EQUALS
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️Assertion Failed: ${actual} !==  ${expected}`);
  }
};
assertArraysEqual([1, 2, 3], [3, 2, 3]);
