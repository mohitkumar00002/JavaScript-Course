const myself = {
    name: "Mohit",
    age: 21,
    profession: "Web Developer",
    availabity: "active"
}

// accessing keys
for (let key in myself) {
    //console.log(key)
}

// accessing values
for (let value in myself) {
    //console.log(myself[value])
}

// accessing key and value together
for (let key in myself) {
    //console.log(`${key} : ${myself[key]}`)
}

// forin - In array
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
for(let array in arr){
   // console.log(`Key : ${array} and value : ${arr[array]}`)
}

// forin - In map object
let map = new Map();

map.set('in', 'Indian');
map.set('ny', 'New York');
map.set('usa', 'United States of America');
map.set('pk', 'Pakistan');

console.log(map);

// for(let key in map){
//     console.log(key)
// }
// for(let key of map){
//     console.log(key)
// }

// not iterable
for(let key in map){
    console.log(map[key])
}
for(let key of map){
    console.log(map[key])
}
