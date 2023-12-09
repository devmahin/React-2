fetch("product.json")
    .then(res => res.json())
    .then(res => productcard(res))



function productcard(productInfo){
    let root = document.getElementById("root")
    // root.innerHTML = "<h1>hellow</h1>"

    // console.log(productInfo)
    productInfo.forEach(value => {
        root.innerHTML += htmlCode(value)
    })




  function htmlCode (info){
const {imageURL,productName,price} = info;

    const html = `<div>
    <img src="${imageURL}" alt=""> 
    <h3>${productName}</h3>
    <h2>${price}</h2>
    </div>`
    return html
}




}