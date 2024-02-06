const user = {
    username : "Mohit",
    loginCount : 8,
    signedIn : true,
    getUserDetails : function(){
        //console.log("Get user details from database");
        console.log(`Username : ${this.username}`)
        //console.log(this)

    }
}
console.log(user.username);
console.log(user.getUserDetails());
//console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

// overwrite values
// const userOne = User("Hitesh", 7, true);
// const userTwo = User("Mohit", 8, false);
// console.log(userOne)

const userOne = new User("Hitesh", 7, true);
const userTwo = new User("Mohit", 8, false);
console.log(userOne.constructor);
//console.log(userTwo);