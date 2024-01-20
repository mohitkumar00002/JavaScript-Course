/********* NUMBER *********/

let score = 100;
//console.log(score);

let balance = new Number(200)
//console.log(balance)

// methods
let newBalance = balance.toString();
//console.log(typeof newBalance);
//console.log(balance.toFixed(1)) // declare the digit after the decimal

let number = 123.556;
//console.log(number.toPrecision(3))

let newNumber = 1000000;
//console.log(newNumber.toLocaleString())     // add commas to the number according to the international place value system

// add commas according to the indian place value system
//console.log(newNumber.toLocaleString("en-in"))


// +++++++++++++++++++++  MATHS ++++++++++++++++
console.log(Math)
console.log(Math.abs(-5)) // return absolute value means always gives positive value
console.log(Math.round(9.5));
console.log(Math.ceil(4.1)); // return number of the top
console.log(Math.floor(4.9));  // return number from the down
console.log(Math.max(4,3,6,5)); //return the maximum value
console.log(Math.min(4,3,6,5)); //return the minimum value

console.log(Math.random()) // always retuwn a random number between 0 and 1
