// Do any async task
// cryptography, DB calls, network

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 1 is complete')
        reject()
    }, 1000);
})

promiseOne.then(() => {
    console.log("Promise 1 consumed")
}).catch(() => {
    console.log('Promise 1 got some error')
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2 is complete");
        resolve()
    }, 2000);
}).then(() => {
    console.log("Promise 2 consumed")
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: "user", email: "user@gmail.com" })
    }, 3000);
})
promiseThree.then((value) => {
    console.log(value)
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ name: "Mohit", password: 123 })
        }
        else {
            reject("ERROR : Something went wrong")
        }
    }, 4000);
})
// Promise Chaining
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("The promise is either resolved or rejected")
})

// handling promise with async and await (try & catch)

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "JavaScript", password: "js123" })
        }
        else {
            reject("JS went wrong")
        }
    }, 5000);
});

//  async function consumePromiseFive(){
//     let response = await promiseFive;
//     console.log(response)
//  }
//  consumePromiseFive()
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    } 
}
consumePromiseFive()

// async function getAllUsers() {
//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/users");
//         let data = response.json();
//         console.log(data)
//     }
//     catch(error){
//        console.log("Error : " + error);
//     }
    
// }
// getAllUsers()

// Above function using then catch syntax

let url = fetch("https://jsonplaceholder.typicode.com/users");
url.then((response)=>{
   return response.json()
}).then((value)=>{
   console.log(value)
}).catch((error)=>{
    console.log(error)
})