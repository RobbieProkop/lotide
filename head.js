const assertEqual = require("./assertEqual");

const head = function (array) {
  if (array !== []) {
    return array[0];
  } else console.log(undefined);
};

module.exports = head;
