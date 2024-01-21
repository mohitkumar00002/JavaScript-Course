// ********** DATE *******
let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);

// Create Date
let createMyDate = new Date(2002,10,28)
//console.log(createMyDate.toDateString())

let createDate = new Date(2002,10,28,2,30,56)
//console.log(createDate.toLocaleString())

let customDate = new Date("02-06-2022")
//console.log(customDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(customDate.getTime())
console.log(Math.round(Date.now()/1000))


let date = new Date;
console.log(date.getDay() + 1);

// toLocaleString is a object we can define anything according to our need
date.toLocaleString('default',{
    day : 'thursday',
    month : 'January'
})