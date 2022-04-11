const assertEqual = require("../lib/assertEqual");
const tail = require("../lib/tail");

let result = tail(["head", "hello", "world", "I'm Robbie"]);
// console.log(result);
// assertEqual("hello", "hello"); // comparing strings
// assertEqual(["hello", "1"].length, ["hello", "3"].length); // comparing the amount of elements
assertEqual(result[2], "I'm Robbie"); // comparing the specific element to a string
// assertEqual(result.length, 3);
