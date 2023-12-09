function fun(min,max){
    return Math.floor(Math.random() * (max - min +1 )) + min
}

console.log(fun(1,6))




const array = ["mahin", "adib", "raju","antor", "jubayer", "alu"]
console.log(array.sort())




let sortNum = [1,34,5,64,1,34]

console.log(sortNum.sort(function(a,b){
    return a - b
}))




function leapYears (years){
    let leap = years % 4;
    if(leap === 0 ){console.log(`leap years ${years}`)}else{
        console.log(`Not leap years ${years}`)
    }

}
leapYears(2676)


function leapyears(year){
if((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0)){
    console.log(`Year is a leap years ${year}`)
}else{
    console.log(`years is not leap years ${year}`)
}
}
leapyears(1988)













const vowels = ["a", "e", "i" ,"o","u", "A","E","I","O","U"]


function vowel (sentence){
    let count =0 ;
let array = Array.from(sentence)
// console.log(array)
array.forEach((value) => {
    if(vowels.includes(value)){
        count++
    }
})
return count

}
console.log(vowel("I love bangladesh"))





const number = [1,2,3,2,4,5,6,6,7,8,9,5,7,8,10,11]
let dublicatre = number.filter((value,index,array) => {
    return array.indexOf(value) !== index
})
console.log(dublicatre)





// const sentence = "Lorem sumit ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, ullam? Expedita dolorum sumit architecto at enim tenetur tempore impedit optio SUmit ea odit illo aut odio sapiente cumque nostrum soluta, doloremque quam!"

// // let sen = sentence.match(/ssumit/gi)
// // let sen1 = sen ? sen.length : 0
// // console.log(sen1)


// let position = sentence.search(/sumit/i)
// let position2 = position > 0 ? position : "Not found"

// console.log(position2)


function linearSearch(arr, val){
    const length = arr.length
    for(i=0; i<length; i++){
        if(arr[i] === val){
            return i
        }
    }
    return "Not found"

}
console.log(linearSearch(["a","b","c","d"], "d"))



function longestString(names){
    let longestWord = ""
    for(name of names){
        if(name.length > longestWord.length){
            longestWord = name
        }
    }
    return [longestWord, names.indexOf(longestWord)]

}


console.log( longestString(["Sumit Saha", "learn with sumit", "akash"]))


function fizzBazz (numbers){
    for(let i = 1; i < numbers; i++){
        if(i % 15 === 0){
            console.log(`${i} is 15 fizz`)
        }else if(i% 3 === 0){
            console.log(`${i} 3 is buzz`)
        }
        else{
            console.log(i)
        }
    }
}

fizzBazz(100)





const mixedArr= [
    "lws",
    undefined,
    "lear with mahin",
    false,
    "",
    "thanks all",
    NaN

]
let mix = mixedArr.filter((el) => {
    if(el){
        return true
    }else{
        return false
    }

})

console.log(mix)




const obj= 
    {a:"lws",
   b: undefined,
    c:"lear with mahin",
    d:false,
    f:"",
    g:"thanks all",
    h:true,
    i:NaN}


let object = function (ob){
    for(i in ob){
        if(!ob[i]){
            delete ob[i]
        }
    }
    return ob;
}
console.log(object(obj))