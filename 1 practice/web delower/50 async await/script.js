import productCard from "./alibaba.js"
// console.log(productCard)

async function loadApi (){
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json();
    // console.log(data)


    let productCode = ""
    for(let value of data){
        productCode += productCard(value)
    }
// console.log(productCode)
let root = document.getElementById("root")
root.innerHTML = productCode
}
loadApi()




