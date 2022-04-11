const assertEqual = function (actual, expected) {
  // template literal format
  if (actual !== expected) {
    console.log(`⛔️⛔️⛔️Assertion Failed: ${actual} !==  ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} ===  ${expected}`);
  }
};

// // create a counting function
// const countOnly = function (allItems, toBeCounted) {
//   const filteredValues = [];
//   const includedValues = [];
//   const counted = {};

//   // console.log("toBeCounted values: ", Object.values(toBeCounted));
//   // console.log("allItems:", allItems);

//   // filter for true values
//   for (const key in toBeCounted) {
//     let isTrue = toBeCounted[key];
//     // console.log("values of tobecounted:", isTrue);
//     if (isTrue === true) {
//       // console.log("key ", key);
//       filteredValues.push(key);
//       // console.log("filteredValues: ", filteredValues);
//     }
//   }

//   for (let i = 0; i < allItems.length; i++) {
//     if (filteredValues.includes(allItems[i])) {
//       // console.log("allItems[i]:", allItems[i]);
//       includedValues.push(allItems[i]);
//       // console.log("includedValues:", includedValues);
//     }
//   }

//   for (let j = 0; j < includedValues.length; j++) {
//     let name = includedValues[j];
//     let num = 0;
//     for (let x = 0; x < includedValues.length; x++) {
//       if (name === includedValues[x]) {
//         num += 1;
//         // console.log("num of names :", num);
//       }
//     }

//     counted[name] = num;
//   }
//   return counted;
//   // // looping through objects
//   // for (const item in toBeCounted) {
//   //   console.log("toBeCounted key: ", item);
//   // }
//   // // looping throuhg array
//   // for (let i = 0; i < allItems.length; i++) {
//   //   console.log("allItems: ", allItems[i]);
//   // }
// };

// create a counting function
const countOnly = function (allItems, toBeCounted) {
  const filteredValues = [];
  const includedValues = [];
  const counted = {};
  for (const key in toBeCounted) {
    // looping through the keys of tobeCounted object
    if (toBeCounted[key]) {
      // if the key is the one we want
      filteredValues.push(key); //add it to filteredValues
    }
  }
  for (let i = 0; i < allItems.length; i++) {
    // loops through allitems
    if (filteredValues.includes(allItems[i])) {
      // if filtered values contains an item from allitems,
      includedValues.push(allItems[i]); //add that item to includedValues
    }
  }
  for (let j = 0; j < includedValues.length; j++) {
    //looping through included values
    let name = includedValues[j]; //assigning the value to name variable
    let num = 0;
    for (let x = 0; x < includedValues.length; x++) {
      //loop through included values again
      if (name === includedValues[x]) {
        //if the name is already included in name
        num += 1; //add another number to num
      }
    }
    counted[name] = num; // counted is an object with name key and num property
  }
  return counted;
};

const numbersArr = [[6, 2, 3, 4, 9, 6, 1, 0, 5]];
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});
console.log("result 1", result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
