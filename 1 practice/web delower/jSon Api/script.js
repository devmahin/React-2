const product = [
    {
        id : 1,
        productName : 'Com fortable Denim Shirt for Men - Blue',

        imageURL : 'https://static-01.daraz.com.bd/p/858ad965067922e0673b718d11e27f7e.jpg',
        price : 120,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minima natus, provident velit reiciendis commodi voluptatum aperiam distinctio perspiciatis praesentium.',
    },
    {
        id : 2,
        productName : 'New White Shirt Men s Stylish & Fashionable Trendy Good Looking Long Sleeve Formal Shirt',

        imageURL : 'https://static-01.daraz.com.bd/p/8045dce7b7ca5a4fb78162ca96f29dc0.jpg_400x400q75-product.jpg_.webp',
        price : 200,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minima natus, provident velit reiciendis commodi voluptatum aperiam distinctio perspiciatis praesentium.',
    },
    {
        id : 3,
        productName : 'Samsung Galaxy A04s (4GB/128GB) - 5000mAh Battery Samsung Galaxy A04s (4GB/128GB) - 5000mAh Battery phone' ,

        imageURL : 'https://static-01.daraz.com.bd/p/5433521cd491d78f32a8627cf3689002.jpg',

        price : 10000,
        description : '',
    },
    {
        id : 4,
        productName : 'For Xiaomi Redmi Note 11 4g Back Camera Lens Protector - Transparent (Not Glass)',

        imageURL : 'https://static-01.daraz.com.bd/p/5ce5e89de39a7c5da400e49b27ddef6a.jpg',
        
        price : 100,
        description : '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minima natus, provident velit reiciendis commodi voluptatum aperiam distinctio perspiciatis praesentium.',
    }

]



let form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()

    let search = e.target.searchBox.value
    let search2 = search.toLowerCase()

   const searchResult = product.filter((value) => {
        const productName = value.productName
        const productNameSearcg = productName.toLowerCase()

        return productNameSearcg.includes(search2)

    })
    // console.log(searchResult)
let root = document.getElementById("root")
let htmlCodeDiv = ""
    searchResult.forEach(value => {
        let code = productCard(value)
        // console.log(code)
        htmlCodeDiv += code 
    })
    root.innerHTML = htmlCodeDiv

    
})







    function productCard (info){
        let {imageURL,price,productName,description} = info;

      const htmlCode = `<div id="product">
        <img src="${imageURL}" alt="">
        <h6>${productName}</h6>
        <h4>$${price}</h4>
        <p>${description}</p>
        </div>`
        return htmlCode
    }