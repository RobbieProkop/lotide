//Dangerous file! Only run if you want to append contents to test files

///
// import * as fs from "fs";
// for (const fileName of fs.readdirSync("lib")) {
// const fileContents = import { describe } from "mocha";
// `import { describe } from "mocha";
// import { assert } from "chai";
// import { ${fileName.replace(".js", "")} } from "../lib/${fileName}";

// describe("${fileName.replace(".js", "")}", () => {
//   it("");
//   it("");
//   it("");
//   it("");
//   it("");
// });`;
//   import { describe } from "mocha";
//   import { assert } from "chai";
//   import { myFunction } from "../lib/index.js";

//   describe("myFunction()", () => {
//     it("should return", function () {
//       const testData = "actual";
//       const expected = "result";
//       assert.deepEqual(myFunction(testData), expected);
//     }),
//       it("should return", function () {
//         const testData = "actual";
//         const expected = "result";
//         assert.deepEqual(myFunction(testData), expected);
//       });
//   });
//   fs.appendFileSync(`test/${fileName}`, fileContents);
// }
///
// import * as fs from 'fs';

// for (const fileName of fs.readdirSync('lib')) {
//   const fileContents = import { describe } from "mocha";
//   import { assert } from "chai";
//   import { ${fileName.replace(".js","")} } from `../lib/${fileName}`;

//   describe(`${fileName.replace(".js", "")}`, () => {
//     it("");
//     it("");
//     it("");
//     it("");
//     it("");

//   });`;
//   fs.appendFileSync(`test/${fileName}`, fileContents);
// }
