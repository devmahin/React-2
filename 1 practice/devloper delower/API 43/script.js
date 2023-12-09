fetch("https://jsonplaceholder.typicode.com/users")
 .then(res => res.json())

 .then(res => user(res))





function user(info){
    // console.log(info)
    let root = document.getElementById("root") 
    
    let userInfo = "";

    info.forEach(value => {
        userInfo += htmlCode(value)
    })
    root.innerHTML = userInfo
}

function htmlCode(productInfo){
    const {photo,name,email} = productInfo

    const htmlCode =`
    <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio asperiores cupiditate voluptatibus id, molestiae animi ipsam dolore quis libero vel.</p>
    <h2>${name}</h2>
    <p>${email}</p>
    </div>`

return htmlCode

}



