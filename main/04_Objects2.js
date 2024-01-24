// singleton objects

let tinderUser = new Object()

tinderUser.id = 123;
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = true;

//console.log(tinderUser);

// Nesting of objects
const regularUser = {
    email: "admin@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Mohit",
            lastName: "Kumar"
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName);

// merging of objects

let obj1 = {
    a: 1,
    b: 2
}
let obj2 = {
    c: 3,
    d: 4
}
let obj3 = {
    e: 5,
    f: 6
}
let obj = Object.assign({}, obj1, obj2, obj3)
//console.log(obj)

// another way of merging

let newObj = {...obj1, ...obj2, ...obj3}
console.log(newObj)

// Array objects

let user = [
    { name: "obj1" },
    { name: "obj2" },
    { name: "obj3" },
    { name: "obj4" },
    { name: "obj5" },
    { name: "obj6" },
    { name: "obj7" }
];

console.log(user[1].name);

user.map((element) => {
    console.log(element.name);
});


user.forEach((element) => {
    console.log(element.name);
});

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));