const assertEqual = function (actual, expected) {
  // template literal format
  if (actual !== expected) {
    console.log(`⛔️⛔️⛔️Assertion Failed: ${actual} !==  ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} ===  ${expected}`);
  }
};

const eqArrays = function (actual, expected) {
  // USING NOT EQUALS
  if (actual.length !== expected.length) return false;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) return false;
  }
  return true;
};

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    console.log("key:", key, "value1:", object1[key], "value2:", object2[key]);
    // Array.isArray(object1[key])
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      const isEqual = eqArrays(object1[key], object2[key]); // returns boolean
      if (!isEqual) {
        return false;
      }
    } else if (Object.values(object2) === Object.values(object1)) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  console.log(`Example label: ${inspect(actual)}`);
  // console.log(eqObjects(actual);
  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}`
    );
  } else {
    console.log(
      `⛔️⛔️⛔️Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`
    );
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2));
