const head = require("../head");
const assertEqual = require("../assertEqual");

// head([5, 6, 7]);
assertEqual(head([5, 5, 7]), 5);
