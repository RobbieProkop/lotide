// function which takes in 1 array, then returns the middle most elements
// will need a new array to place the middle into
// Edge Case: For 1-2 element arrays, there is no middle. Return empty
// Edge Case: For arrays with an odd number of elements, return single middle element
// Edge Case: For arrays with an even number of elements, return 2 middle elements

// I'll need to figure out the length of the array, to find if it is odd or even
// may want to loop through the array and push only the middle. may also need the index
const middle = function (array) {
  let midArr = [];
  if (array.length >= 3) {
    for (let i = 0; i < array.length; i++) {
      if (array.length % 2 !== 0) {
        midArr.push(Math.ceil(array.length / 2));
        return midArr;
      } else {
        midArr.push(array.length / 2) && midArr.push(array.length / 2 + 1);
        return midArr;
      }
    }
  }
  return midArr;
};
module.exports = middle;
