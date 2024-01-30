// for loop

// increment example
for(let i = 0; i<10; i++){
    let element = i;
    if(element === 5){
        //console.log("5 is best number")
    }
    //console.log(element)
}

// decrement exmaple
for (let j=10; j>=0; j--){
    //console.log(j)
}

// Nesting of loops

for (let i = 1; i<= 10; i++) {
    //console.log(`Table of : ${i}`)
    for (let j = 1; j <= 10 ; j++) {
        //console.log(`${i} * ${j} = ${i*j}`)
    }  
}

// loops with array
let arr = ["batman", "superman", "spiderman", "ironman", "thor", "groot"]
// console.log(arr.length)
// console.log(arr[4])

for(let i=0; i<arr.length; i++){
    //console.log(arr[i])
}

// normal, break and continue;

// normal
for (let index = 1; index < 10; index++) {
    console.log(index)
    if(index === 4){
        console.log("Detected 4")  
    }
}

// break
for (let index = 1; index < 10; index++) {
    console.log(index)
    if(index === 5){
        console.log("Detected 5")
        break
    }
    
}

// continue
for (let index = 1; index < 10; index++) {
    console.log(index)
    if(index === 7){
        console.log("Detected 7")
        continue
    }
    
}