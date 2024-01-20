// STACK Memory (Primitive DataTypes) HEAP memory (Reference DataTypes)
 
// Stack memory gives copy of the data

let myYoutubeName = "hindi Tales";

let anotherName = myYoutubeName;

anotherName = "ComedyAdda"

console.log(myYoutubeName);
console.log(anotherName);

// Heap memory gives reference of the data types

let userOne = {
    name : "Ram",
    place : "Ayodhya"
}

let userTwo = userOne

userTwo.yug = "Satyug"

console.log(userOne.yug);
console.log(userTwo.yug);