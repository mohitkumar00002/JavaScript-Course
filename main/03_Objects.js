// singleton
// Object.create

// Object literals
let mySym = Symbol("symbol key 1")
let JsUser = {
    name : "Mohit",
    "full name" : "Mohit Kumar",
    [mySym] : "symbol key 1", // correct syntax or reading symbol value in object
    age : 21,
    email : "mohit@google.com",
    location : "Hapur",
    isLoggedIn : true,
    lastLoginDays : ["monday", "wednesday"]
}

// Reading object values
//console.log(JsUser);
//console.log(JsUser.email);

// second way of reading object values
//console.log(JsUser."full name") wrong way
console.log(JsUser["full name"]) // type of object key is string

// reading symbol value in object
console.log(JsUser[mySym]);

// updating object value
JsUser.email = "mohitkumar@123gmail.com";
console.log(JsUser.email);

// freeze object - means unable to change value
//Object.freeze(JsUser);

JsUser.email = "mohitkumar@000000000gmail.com";
//console.log(JsUser.email);

// functions in object

JsUser.greeting = function(){
    return ("Hello Js User")
}
console.log(JsUser.greeting())

// reference
JsUser.greeting2 = function(){
    return (`Hello Js User ${this["full name"]}`)
}
console.log(JsUser.greeting2())
