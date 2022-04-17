// const assertEqual = require("../lib/assertEqual");
// const eqObjects = require("../lib/eqObjects");

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

// const cd2 = { c: "1", d: ["2", 3, 4] };

// // console.log(eqObjects(ab, ba));
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// // TESTING WHEN OBJ INCLUDES ARRAYS

// assertEqual(eqObjects(cd, dc), true); // => true
// assertEqual(eqObjects(cd, cd2), false);
// // assertEqual(eqObjects(cd, cd2), false); // => false

// TESTING FOR PRIMITIVES

// console.log(eqObjects(ab, ba));
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

const assert = require("chai").assert;
const eqObjects = require("../lib/eqObjects");

describe("checks to see if the objects are equal (order does not matter)", () => {
  it("returns { a: "1", b: "2" } for { a: "1", b: "2" }", () => {
    assert.deepEqual(eqObjects({ a: "1", b: "2" }), { a: "1", b: "2" });
  });
  // it("returns [2,3] for [1,2,3,4]", () => {
  //   assert.deepEqual(eqObjects([1, 2, 3, 4]), [2, 3]);
  // });
  // it("returns [] for [1,4]", () => {
  //   assert.deepEqual(eqObjects([1, 4]), []);
  // });
  // it("returns [] for [5]", () => {
  //   assert.deepEqual(eqObjects(["5"]), []);
  // });
});