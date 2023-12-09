// fetch("https://fakestoreapi.com/products")
// .then(res => res.json())
// .then(res => console.log(res))

import products from "./product.js"

async function loadApi (){
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()


    let productCode = "";
    for(let value of data){
        productCode +=  products(value)
    }
    document.getElementById("root").innerHTML = productCode
}
loadApi()