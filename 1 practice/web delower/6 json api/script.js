fetch("product.json")
    .then(res => res .json())
    .then(res => product(res))



function product (code){
    let root = document.getElementById("root")
    code.forEach(value => {
        root.innerHTML += htmlCode(value)
    })

}

function htmlCode (codeInfo){
    const {id,imageURL,price,productName} = codeInfo;
    
   const html=`  <div id="product">
        <img src="${imageURL}" alt="">
        <p>${productName}</p>
        <h3>${price}</h3>
        <small>${id}</small>
    </div>`
    return html 
}