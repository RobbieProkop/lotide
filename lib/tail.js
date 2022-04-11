const assertEqual = require("./assertEqual");
let tail = function (array) {
  let newArray = array.slice(1); // cuts off the first element
  return newArray; // returns the tail of the array (everything but the first)
};
// let result = tail(["head", "hello", "world", "I'm Robbie"]);
// console.log(result[2]);

// assertEqual("hello", "hello"); // comparing strings
// assertEqual(["hello", "1"].length, ["hello", "3"].length); // comparing the amount of elements
// assertEqual(words[3], "I'm Robbie"); // comparing the specific element to a string
// assertEqual(result.length, 3);

module.exports = tail;
