// let arraySlice = [12,34,45,67,89,0]
// let arraySlice2 = arraySlice.slice(1, 9)
// console.log(arraySlice2)


// let arrSplice = [12,34,45,67,89,0]
// let arrSplice2 = arrSplice.splice(1,4, 23,34,56)
// console.log(arrSplice2)
// console.log(arrSplice)



// let arr1 = [10,20,30]
// let arr2 = arr1.reduce((preventvalue, currentValue, currentIndex,array) => {
// return preventvalue + currentValue
// }, 0)
// console.log(arr2)



// let find1 = [10,20,30,40,50,60,70,80]
// let find2 = find1.find((value) => {
//     return value < 20
// })
// console.log(find2)

// class student{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;

//     }test(){
//         console.log("hello")
//     }
//     exmpleFun(){
//         let array = [1,2,3]

//         array.find(()=> {
//             this.test()
//         })
//     }
// }

// let stu = new student("mahin", 19)
// stu.exmpleFun()



// const obj = {
//     name : "mahin howlader",
//     roll : 6723463,
//     class : "honours 1st years"
// }
// console.log(Object.entries(obj))



// const obj4 = {
//     a: "alu",
//     b:"Mula"
// }
// const obj5 = {
//     d: "Sosa",
//     c:"potol"
// }
// console.log({...obj4,...obj5})


// function fun2 (a,...p){
//     console.log(a,p)


// }
// fun2(112,34,56,78)
let e = 25;
let f = 50;

[e,f] = [f,e]
console.log(f)


const mySet = new Set()
mySet.add(12).add(6).add("Bangladesh")
console.log(mySet)
console.log(mySet.size)


let myArray = [1,2,3]
let mySet2 = new Set(myArray)
for(let value10 of mySet2){
    console.log(value10)
}



let array11 = [1,2,3,4,5,6,7,8,1,2,3,4,5]
let arr11 = new Set(array11)
console.log([...arr11])