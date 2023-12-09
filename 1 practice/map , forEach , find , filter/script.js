let array = ["mahin" , "antor", "Adib","alamin"]

let array2 = array.map((name) => {
    return name.toLocaleUpperCase()

})
console.log(array2)



const number = [10,20,30,40]

let num = number.map((value, index,array) => {
   return value *2
})
console.log(num)


const obj =[
    {name : "Mahin howlader", availableBook:30},
    {name : "hasan ", availableBook:10},
    {name : "Adib", availableBook:5},
    {name : "Babul howlader", availableBook:4},
    {name : "Sakib ", availableBook:1}
]


let objName = obj.map(item => {
    return item.availableBook * 2
})


console.log(objName)





// const number = [11,21,32,24,52,6,7,8,9]



// const student = [{name : "mahin", number : 70, subject : "math"},
//                 {name : "karim", number : 85, subject : "Math"},
//                 {name : "ram", number : 33, subject : "English"},
//                 {name : "shyam", number : 40, subject : "Bangla"},
//                 {name : "jodu", number : 75, subject : "Bangla"},
//                 {name : "mahin", number : 20, subject : "Bangla"},
// ];



// // let numbers = number.find((num)=> {
// //     return num > 20

// // })
// // console.log(numbers)


// // let stu = student.find(value=> {
// //     return value.number < 35
// // })
// // console.log(stu)



// let stu = student.filter(value=> {
//     return value.number < 35
// })
// console.log(stu)


// let subject = student.filter(value => {
//     return value.number < 50 && value.subject === "Bangla" 
// })
// console.log(subject)


