// const add = require('./math.js');
// const mult = require('./math.js'); //!these are for condition 1

const { add , subtract, multiply, divide } = require('./math.js');//!this is for condition 2 and 3

const math = require('./math.js');

console.log (math.add(2, 3)); // Output: 5
console.log (math.multiply(2, 3)); // Output: 6

console.log (add(2, 3)); // Output: 5
console.log (multiply(2, 3)); // Output: 6