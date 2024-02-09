class User {
    constructor(username, email, password){
      this.username = username;
      this.email = email;
      this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

let chai = new User("Chai", "chai@gmail.com", 123);
// console.log(chai)
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//behind the scene

function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}
User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

let code = new User2("Chai", "chai@gmail.com", 123);
//console.log(code);

// console.log(code.encryptPassword());
// console.log(code.changeUsername());

// Inheritance

class abc {
    constructor(username){
        this.username = username;
      }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}   
class xyz extends abc {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password
    }
    addCourse(){
        console.log(`Course is added by ${this.username}`)
    }
}

let use = new xyz("Hitesh", "user@gmail.com", 123);
use.addCourse();

console.log(use instanceof abc)