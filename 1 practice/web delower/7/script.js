fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(res => ProductApi(res))


function ProductApi(ProductValue){
    // console.log(ProductValue)
    let root = document.getElementById("root")
    let htmldash = ""
    ProductValue.forEach(value => {
        htmldash += htmlCode(value)
    })
    root.innerHTML = htmldash


}

function htmlCode (code){
    const {title,id,body} = code;
    const html =` <div id="api">
                <h1>${id}</h1>
                <p>${title}</p>
                <small>${body}</small>
                </div>
                `   
        return html;

}