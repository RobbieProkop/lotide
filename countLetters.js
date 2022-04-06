const assertEqual = function (actual, expected) {
  // template literal format
  if (actual !== expected) {
    console.log(`⛔️⛔️⛔️Assertion Failed: ${actual} !==  ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} ===  ${expected}`);
  }
};

const countLetters = function (sentence) {
  let obj = {};
  let newArr = sentence.toLowerCase().replace(/\s/g, "");
  console.log(newArr);
  for (const char of newArr) {
    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }

  return obj;
};

console.log(countLetters("lighthouse in the house"));
