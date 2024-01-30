//let userEmail = "rajputmohit0002@gmail.com";
// let userEmail = ""; empty string retuns false 
// let userEmail = []; empty array returns true;
let userEmail = 7; // any positive number except 0 return true


if(userEmail){
    console.log("Got user Email")
}
else{
    console.log("User Email not found");
}

// falsy value
// false, 0. -0, BigInt 0n, "", null, undefined

// truthy value
// true, "0", " ", [], {}, function(){}, "false", any number except 0

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}
else{
    console.log("Object is not empty")
}

// Nullish Coalescing Operator (??) : null undefined
let val1 = null ?? 10;
let val2 = 10 ?? null;
let val3 = 15 ?? 10;
let val4 = 20 ?? undefined;
let val5 = undefined ?? 20;
let val6 = null ?? undefined;
let val7 = null ?? undefined ?? 13 ?? 40;

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);
console.log(val6);
console.log(val7);