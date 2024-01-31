// for of loop - is applicable on string and array and map objects

["", "", "", ""]
[{}, {}, {}, {}]

let arr = [10, 20, 30, 40, 50, 60, 70];
for(let num of arr){
    //console.log(num)
}

let string = "Mohit";
for(let str of string){
    //console.log(str)
}

// Map :- The Map object holds key-value pairs and remembers the original insertion order of the keys.
// In Object, the data type of the key can only be a string or symbols. Other types will automatically be converted to strings. On the other hand, Map takes any type of key.
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

//console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

//console.log(map1.get('a'));

//console.log(map1.size);

//map1.delete('b');

//console.log(map1.size);


//console.log(map1)
for(let key of map1){
    console.log(key)
}
for(let key of map1){
    //console.log(map1[key])  result undefined
}
// accessing key and value of map object separately
for(let [key,value] of map1){
    console.log(key);
    //console.log(value)
}

// Note :- In map objects both for in and for of loops are working while in objects on for in loop are work