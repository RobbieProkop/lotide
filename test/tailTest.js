const assert = require("chai").assert;
const tail = require("../lib/tail");

describe("tail  of an array", () => {
  it("returns [2,3] for [1,2,3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [] for [5]", () => {
    assert.deepEqual(tail(["5"]), []);
  });
});
