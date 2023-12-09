function products(productCard){
    const {price,image,title,description} = productCard;

    const htmlCode = `<div id="productBox">
    <img src="${image}" alt="">
    <h1>${price}</h1>
    <h2>${title.length > 20 ? title.slice(0,20) + "..." : title}</h2>
    <p>${description.length > 100? description.slice(0,100) + "..." : description}</p>
    </div>
    `
    return htmlCode

}

export default products;
