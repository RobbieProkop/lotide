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

// need to take in an original array (actual), and itemsToRemove array (expected)

const without = function (source, toRemove) {
  //  should retrun a new array
  let newArr = [];

  //  should return only elements from the original array that have not been removed (not present in toRemove)

  // first we need to see if there are any matches between the two arrays
  // if the element does not match, push it to the new array
  // if it does match, do nothing
  if (!eqArrays(source, toRemove)) {
    for (let i = 0; i < source.length; i++) {
      if (!toRemove.includes(source[i])) {
        newArr.push(source[i]);
        // console.log(newArr);
      }
    }
  }
  return newArr;
};

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

assertArraysEqual(without(["1", "2", "3", "88"], [1, 2, "3", "4", 6, 4, 3]), [
  "1",
  "2",
]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3", "4", 6, 4, 3]), [
  "1",
  "2",
]);

assertArraysEqual(without(["1", "2", "3"], ["3", 2, 1, "4", 6, 4, 3]), [
  "1",
  "2",
]);
