function calculateCartPrice(val1, val2, ...num1){
     return num1
}
console.log(calculateCartPrice(100,200,300,400,5000))

//objects in function 

let user = {
    username : "Mohit",
    password : "admin@123"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the password is ${anyobject.password}`);
}
handleObject(user)

// direct passing of object in function

handleObject({
    username : "Sammy",
    password : "sammy123"
})

// Array in function

let arr = [100, 300, 500, 700]

function handleArray(getArray){
    return getArray[1]
}
console.log(handleArray(arr))