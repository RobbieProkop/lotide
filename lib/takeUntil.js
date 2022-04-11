// create a takeUntil function

// takes in 2 parameters, an array, and a callback
// must return a slice of the array, taken from the beginning
// keep going until the callback return a truthy value

// the callback will only take in 1 value: the item from the array

const takeUntil = function (array, callback) {
  const results = [];
  for (const item of array) {
    // console.log(callback(item));
    if (!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};
module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, (x) => x < 0);
// console.log(results1);

// console.log("---");

// const data2 = [
//   "I've",
//   "been",
//   "to",
//   "Hollywood",
//   ",",
//   "I've",
//   "been",
//   "to",
//   "Redwood",
// ];
// const results2 = takeUntil(data2, (x) => x === ",");
// console.log(results2);
