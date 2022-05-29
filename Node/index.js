console.clear();
const calculator = require("./asad-calculator");
// const {sum, subtract, multiply, divide } = calculator;
// sequence doesnt matter e.g:
const { subtract, sum, multiply, divide } = calculator;
//until
// const {sum: subtract, subtract:sum, multiply, divide } = calculator;

console.log("Squence doesn't matter while implicit object destructuring");
console.log("Sum: "+ sum(4, 6));
console.log("Subtract: "+ subtract(20, 6));

//Now time to publish your own package to NPM the eco system
//open terminal then:
//1st - Move to the folder which contains modules of the package
//2nd run: npm init
//3rd - tell package name e.g asad-calculator-sample
//4th - put other information like description, keywords, author, license
//package ready

// publish globally
//1st - login using command: npm login (make sure you have account on npmjs.com)
//  1.1 - enter username and password
//  1.2 - enter otp
//  1.3 - logged-in

//2nd - go to the same directory where you made a package by using command "npm init"
//3rd - run: npm publish
//boom - You are done