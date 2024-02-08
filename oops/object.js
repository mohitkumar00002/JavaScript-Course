function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function CreateUser(username, score) {
    this.username = username;
    this.score = score;
}

CreateUser.prototype.increment = function () {
    this.score++;
}

CreateUser.prototype.printMe = function () {
    console.log(`Score is ${this.score}`);
}

let userOne = new CreateUser("Chai", 25);
let userTwo = new CreateUser("Tea", 50);

userOne.printMe()