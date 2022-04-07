const assertEqual = function (actual, expected) {
  // template literal format
  if (actual !== expected) {
    console.log(`⛔️⛔️⛔️Assertion Failed: ${actual} !==  ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} ===  ${expected}`);
  }
};

// steps:

//  create a function that takes in an object and a value
// loop through the object and return the key which contains the given value
// if no key if found with that value, return undefined

//  create function
// create for in loop

const findKeyByValue = function (obj, item) {
  for (let prop in obj) {
    //loops through the keys of object
    // console.log(`${prop} = ${obj[prop]}`);
    if (obj[prop] === item) {
      //obj[prop] is the value of the current obj key. if it matches,
      return prop; //return the value
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
