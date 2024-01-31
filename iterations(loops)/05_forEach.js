let arr = ["Js", "Python", "Java", "Swift", "C++", "CSS"];

arr.forEach(function(element){
    //console.log(element)
})

function printMe(item){
   //console.log(item)
}

arr.forEach(printMe)

// other main parameters forEach have

arr.forEach((element, index, arr)=>{
   console.log(element, index, arr);
 
})

// objects inside array

let array = [
    {
        name : "Shivam",
        lang : "HTML",
    },
    {
        name : "Gorav",
        lang : "CSS",
    },
    {
        name : "Sanjeev",
        lang : "PHP",
    },
    {
        name : "Payal",
        lang : "Javascript",
    },
    {
        name : "Vivek",
        lang : "Python",
    }
]

array.forEach((item)=>{
    console.log(item.lang)
})