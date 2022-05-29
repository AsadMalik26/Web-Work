// multiple imports for multiple exports in a single line
const sum = require("./sum");
const subtract = require("./subtract");
const multiply = require("./multiply");
const divide = require("./divide");

const funcs = { sum, subtract, multiply, divide };
module.exports = funcs;