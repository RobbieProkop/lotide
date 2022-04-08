const assertEqual = function (actual, expected) {
  // template literal format
  if (actual !== expected) {
    console.log(`⛔️⛔️⛔️Assertion Failed: ${actual} !==  ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} ===  ${expected}`);
  }
};

// create find key function
// takes in 2 parameters, an object and a callback

// USING FOR ... OF loop
const findKey = function (obj, callback) {
  for (const key of Object.keys(obj)) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return "Undefined";
};

// USING FOR ... IN loop
// const findKey = function (obj, callback) {
//   for (const key in obj) {
//     console.log(obj[key]);
//     if (callback(obj[key])) {
//       return key;
//     }
//   }
//   return "not Matched";
// };

let result = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"

assertEqual(result, "noma");
