let arr = [5, 10, 15, 20, 25, 30];

let newArr = arr.reduce((accuumulator, currentValue)=>{
    console.log(`Accumulator : ${accuumulator} and currentValue : ${currentValue}`)
    return accuumulator + currentValue
},0) // 0 is the initial value
console.log(newArr)

const cart = [
    {
        itemName : "Javascript",
        price : 999
    },
    {
        itemName : "Python",
        price : 1099
    },
    {
        itemName : "React",
        price : 599
    },
    {
        itemName : "Swift",
        price : 799
    },
    {
        itemName : "Java",
        price : 1299
    }
]

let totalPrice = cart.reduce((acc, item)=> acc + item.price, 0);
console.log(totalPrice)