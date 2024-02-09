class user {
    constructor(username){
        this.username = username;
    }
    logMe(){
        return `USERNAME : ${this.username}`
    }
    static createId(){
        return `123`
    }
}

// static keyword used to make method unique means not accessible by all
let hitesh = new user("Hitesh");
console.log(hitesh.logMe());
console.log(hitesh.createId())