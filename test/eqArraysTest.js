const eqArrays = require("../lib/assertArraysEqual");
const assertEqual = require("../lib/assertEqual");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 7, 3, 9, 10], [1, 7, 3, 9, 10]), true);
assertEqual(eqArrays([1, 2, 3], [0, 5, 1, 2, 3]), false);
assertEqual(eqArrays([1, 7, 3], [1, 2, 3]), false);
