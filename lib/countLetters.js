const assertEqual = require("./assertEqual");
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
module.exports = countLetters;
// console.log(countLetters("lighthouse in the house"));
