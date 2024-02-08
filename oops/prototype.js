//let myName = "Mohit     ";
//console.log(myName.length)
//console.log(myName.trueLength)

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}

// injecting prototypes
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`)
}

Array.prototype.mohit = function(){
    console.log("Mohit is present in all arrays")

}
// when we inject in object then it will goes to all like string object an array bcoz in js all are objects but when we inject on array or other it wil only for that type only not for all

heroPower.hitesh();
myHeros.hitesh()

myHeros.mohit();
//heroPower.mohit();

// Inheritance
const user = {
    name : "Mohit",
    email : "mohit@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const teacherSupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : "JS Assignment",
    fullTime : true,

    __proto__ : teacherSupport
}


Teacher.__proto__  = user
console.log(TAsupport.isAvailable);
console.log(Teacher.name);

// modern syntax
Object.setPrototypeOf(Teacher, TAsupport);

let anotherUsername = "Chai aur Code     ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`)
}

"Hitesh".trueLength();
"Hitesh    ".trueLength();