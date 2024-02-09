const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter)

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI)

const chai = {
    name : 'Adrak Chai',
    price : 25,
    isAvailable : true,
    getChai : function(){
        console.log("Chai nhi mili")
    }
}
console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, 'name', {
    //writable : false,
    enumerable : false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}