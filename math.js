const add =(a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b;
}

const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

//! Condition 1
module.exports = subtract; // Overwritten by the next assignment.
module.exports = multiply; // Overwritten by the next assignment.
module.exports = divide;   // Overwritten by the next assignment.
module.exports = add;      // Only this is exported because it is the last assignment.

//! Condition 2
// Adds each function as a property of module.exports.
module.exports.add = add;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.divide = divide;


//!Condition 3
//! Condition 3
// Replaces module.exports with an object containing all the functions.
// This is equivalent to Condition 2 but shorter and more common.
module.exports = {
  add,
  subtract,
  multiply,
  divide
};