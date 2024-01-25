let arr = [2, 5, 8, 10, 33, 53, 89, 12]

  let d = arr[0,1,2]
  console.log(d) // print only last indexed value

    // No need to do this
//   let a = arr[0];
//   console.log(a)
//   let b = arr[1];
//   console.log(b)

// Normal print using destructuring
let [a,b,c] = arr;
console.log(a,b,c)

// Rest Keyword - rest is used to print other array elements in an array
// let [a,b,c, ...rest] = arr;
// console.log(a,b,c)
// console.log(a,b,c, rest)

// Print element  by skipping
// let [a, , , ...rest] = arr;
// console.log(a, rest)

// Assign value using object
// let {a,b} = {a:3, b:5}
// console.log(a,b)

// Spread Operator
// Converting array into object(key, value);
let arr1 = [10, 20, 30 ,40]
let obj1 = {...arr1}
console.log(obj1)

function sum(v1, v2, v3) {
    return (v1+v2+v3)
}
console.log(sum(...arr1))

// changing given keys from an object
let obj2 = {
    name : "Harry",
    language : "Javascript",
    framework : "Next.js"
}
console.log({...obj2, framework : "React", name: "Mohit"}) // change
console.log({framework : "React", name: "Mohit", ...obj2 }) // not change