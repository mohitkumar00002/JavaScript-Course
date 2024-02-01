let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNum = num.map((item)=> item+10)
                .map((element)=> element + 1)
                .filter((num)=> num < 18 && num > 12)
console.log(newNum);