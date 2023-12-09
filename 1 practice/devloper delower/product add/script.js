let form = document.getElementById("form")



function product (info){
    const htmlCode = `<div>
    <img src="${info.photo}" alt="">
    <h3>${info.title}</h3>
    <p>${info.description}</p>
    <a href="${info.detailsURL}"> <button>Details</button>
    </div></a>
   
    `
    return htmlCode
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let title = e.target.title.value
    let photo = e.target.photo.value
    let detailsURL = e.target.detailsURL.value
    let description = e.target.description.value

    let productInfo ={
        title,
        photo,
        detailsURL,
        description
        }
  let code = (product(productInfo))
  let root = document.getElementById("root")
  root.innerHTML += code
})



