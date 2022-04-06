const eqArrays = function (arr1, arr2) {
  // USING NOT EQUALS
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
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

// function which takes in 1 array, then returns the middle most elements
const middle = function (array) {
  // will need a new array to place the middle into
  let midArr = [];
  // Edge Case: For 1-2 element arrays, there is no middle. Return empty
  // Edge Case: For arrays with an odd number of elements, return single middle element
  // Edge Case: For arrays with an even number of elements, return 2 middle elements

  // I'll need to figure out the length of the array, to find if it is odd or even
  // may want to loop through the array and push only the middle. may also need the index
  if (array.length >= 3) {
    for (let i = 0; i < array.length; i++) {
      if (array.length % 2 !== 0) {
        midArr.push(Math.ceil(array.length / 2));
        return midArr;
      } else {
        midArr.push(array.length / 2) && midArr.push(array.length / 2 + 1);
        return midArr;
      }
    }
  }
  return midArr;
};
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

// Write assertions to test middle function
