const productCard = (product) => {
    const {image,price, title,description} = product;

    const htmlCode = `<div>
    <img src="${image}" alt="">
    <h1>${price}</h1>
    <h2>${title.length > 20 ? title.slice(0, 20) + "...." : title}</h2>
    <p>${description}</p>
</div>`
return htmlCode

}

export default productCard