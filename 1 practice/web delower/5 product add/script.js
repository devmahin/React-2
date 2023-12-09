

function Product(ProductInfo){
    let {photo,title,details,textarea} = ProductInfo
    let HtmlCode = `<div id="Product_card">
    <img src="${photo}"alt="">
    <h5>${title}</h5>
    <p>${textarea}</p>
    <a href="${details}"><Button>Details</Button></a>
    </div>`
    return HtmlCode
}



let container = document.getElementById("container")
container.addEventListener("submit", (e) => {
    e.preventDefault()

    let title = e.target.title.value
    let photo = e.target.photo.value
    let details = e.target.details.value
    let textarea = e.target.textarea.value



    let ProductInfo = {
        title,
        photo,
        details,
        textarea
    }
    let code = Product(ProductInfo)
    let root = document.getElementById("root")
    root.innerHTML += code
})