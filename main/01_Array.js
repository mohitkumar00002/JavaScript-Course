// Introduction to Array
let marks = [65, 75, 95, 63, false, "Not given", ]
marks[0] = 97 // changing the value of an array
marks[6] = 74  // adding a new value to an array
//console.log(marks)
 
// console.log(marks[0])
// console.log(marks[1])
// console.log(marks[2])
// console.log(marks[3])
// console.log(marks[4])
// console.log(marks[5])
// console.log(marks[6]) // added value
// console.log("The length of marks is ",marks.length)
// console.log(typeof marks) // type of an array is object

// // String method
// let num = [45, 31, 78, 12, 85, null, false, 68];
// /*
// let str = num.toString(num);
// console.log(typeof str);

// // Join Method - join the array by a separator and changes its type to string
// let c = num.join("_");
// console.log(c);

// // Pop Method - Pop out last element of the array
// let d = num.pop();
// console.log(d);

// // Push method - Add new element at the last & return new array length
// let e = num.push(100);
// console.log(num, e)

// // Shift Method -  remove first element from the array
// let f = num.shift();
// console.log(f, num)

// // Unshift Method - add new element at begining & returns new array length
// let g = num.unshift(93);
// console.log(g, num)


// // Delete Operator - not effect the array length
// let num2 = [121, 45, 78, 13, 485, false, null];
// delete num2[2];
// console.log(num2)*/

//concat method
let array1 = [45,32,81,145];
let array2 = [65,66,12,96];
let array3 = [58,25,65,95];
let all = [...array1,...array2, ...array3] // concat by spread
console.log(all)
//console.log(array1.concat(array2,array3))

// // Sort Method - Arrange alphabatically
// let num3 = [475,51,78,65,915]
// let h = num3.sort()
// console.log(h)

// // arrange in ascxending order using compare function
// const compare = (a,b)=>{
//   return a-b // b-a for descending order
// }
// let num4 = [78,65,456,213,77,63]
// let i = num4.sort(compare)
// console.log(i)

// // Reverse Method
// let j = num4 = num4.reverse()
// console.log(j)

// // Splice Method
// let num5 = [23,57,95,782,354,141,496,]
// let = deletedValues = num5.splice(1,3,101,102,103,104,105)
// console.log(deletedValues)

// // Slice Method
// let num6 = [23,57,95,782,354,141,496,]
// let k = num6.slice(2,6)
// console.log(k)


let newArr = new Array(12,32,45,66,47,33,87)
console.log(newArr.includes(100));
console.log(newArr.indexOf(32));