// const middle = require("../lib/middle");
// const assertArraysEqual = require("../lib/assertArraysEqual");

// assertArraysEqual(middle([1]), []); // => []
// assertArraysEqual(middle([1, 2]), []); // => []
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

const assert = require("chai").assert;
const middle = require("../lib/middle");

describe("middle of an array", () => {
  it("returns [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [] for [1,4]", () => {
    assert.deepEqual(middle([1, 4]), []);
  });
  it("returns [] for [5]", () => {
    assert.deepEqual(middle(["5"]), []);
  });
});
