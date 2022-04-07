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

const letterPositions = function (sentence) {
  const results = {};
  // console.log(sentence);

  // let index = 0;
  // for (let char of sentence) {
  //   if (result[char] !== " ") {
  //     if (results[char]) {
  //       results[char].push();
  //     } else {
  //       results[char].push(index);
  //     }
  //     if (char === " ") {
  //     }
  //     index += 1;
  //   }
  // }
  for (let i = 0; i < sentence.length; i++) {
    // console.log(i);
    if (sentence[i] !== " ") {
      //does not count spaces, yet continues along to the next character
      if (results[sentence[i]]) {
        // if the results already contain the letter (sentence) and position array [i]
        results[sentence[i]].push(i); //push the new index number on to the previous array. not that i is not [i]. this would push a new array
      } else {
        results[sentence[i]] = [i]; // if it is not present in results, push a new array with the index number
      }
    }
  }

  return results;
};
console.log(letterPositions("hello sam"));
console.log(letterPositions("these objects are killing me"));

assertArraysEqual(letterPositions("hello").e, [1]);
