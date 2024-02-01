let number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let myNum = number.forEach((item) => {
   return item
})
console.log(myNum)  //shows undefined bcoz forEach not return any value

let newNum = number.map((item) => {
   return item
})
//console.log(newNum)

// filter

let arr = [32, 54, 65, 23, 23, 76, 66, 43, 50];
let newArr = arr.filter((num)=>{
   return num < 70 && num > 50
})
console.log(newArr);


// Array Objects
const books = [
   {
      title : 'Book one', genre : "science", publish : 1995, edition : 2015
   },
   {
      title : 'Book two', genre : "fiction", publish : 1997, edition : 2007
   },
   {
      title : 'Book three', genre : "non-fiction", publish : 2000, edition : 2009
   },
   {
      title : 'Book four', genre : "politics", publish : 2005, edition : 2020
   },
   {
      title : 'Book five', genre : "science", publish : 1989, edition : 2014
   },
   {
      title : 'Book six', genre : "economics", publish : 1995, edition : 2015
   },
   {
      title : 'Book seven', genre : "history", publish : 2007, edition : 2009
   },
   {
      title : 'Book eight', genre : "economics", publish : 1991, edition : 2022
   },
   {
      title : 'Book nine', genre : "non-fiction", publish : 1989, edition : 2003
   },
   {
      title : 'Book ten', genre : "science", publish : 2005, edition : 2007
   }
];

let userBooks = books.filter((item)=>{
   return item.genre === 'science' && item.publish === 2005
})
console.log(userBooks)