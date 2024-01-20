/*
In Js there are two types of DataTypes - 
1. Primitive DataTypes-
2. Reference DataTypes or (Non-Primitive)

Primitive Datatypes are of 7 types - 
shorthand to learn :- nn bb ss u

1. Number
2. Null
3. Boolean
4. BigInt
5. Symbol
6. String
7. Undefined

Reference DataTypes - 
1. Array
2. Object
3. Function

*/

let score = 100;
let finalScore = 100.5;
// Both are number bcoz in Js there is no float and number
//console.log(typeof score);
//console.log(typeof finalScore);

let isLoggedIn = false; // Boolean
let temperature = null; // Null
let value; // undefined

let id = Symbol('123');
let anotherId = Symbol('123');

// both returns different value bcoz symbol return unique value

console.log(id === anotherId);

let bigNumber = 12345677898n
console.log(typeof bigNumber)

// ARRAY

let arr = ["spiderman", "batman", "ironman", true, 123];

// OBJECT
let obj = {
    name : "Mohit",
    profession : "Web Developer",
    age : 21
}

// FUNCTION

function exam(){
    console("I am function")
}