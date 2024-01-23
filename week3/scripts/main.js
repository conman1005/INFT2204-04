import * as lib /*{ halfOf, multiply }*/ from "./lib.js";
import * as validator /*{ halfOf, multiply }*/ from "./validator.js";
import * as arrowFunctions /*{ halfOf, multiply }*/ from "./arrowfunctions.js";

console.log(lib.halfOf(5));
console.log(lib.multiply(5, 5));

console.log(validator.flag);
validator.touch();
console.log(validator.flag);

console.log(arrowFunctions.squareNumsOld);

console.log(arrowFunctions.squares);

console.log(arrowFunctions.even);
arrowFunctions.authour.printBooks();
