function setUsername(username){
    this.username = username;
}

function createUser(username, email, password){
    setUsername.call(this,username);
    this.email = email;
    this.password =  password;
}

let chai = new createUser("chai", "chai@gmail.com", 123);
console.log(chai)