fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(res => countryApi(res))


 function countryApi(apiVAlue){
    let root = document.getElementById("root")
// console.log(apiVAlue)
let code = ""
    apiVAlue.forEach(value => {
        code += htmlCode(value)
    })
 root.innerHTML = code
    }


function htmlCode(info){
    const {flags,name,area} = info;
    const html = `<div id="product">
    <img src="${flags.png}" alt="">
    <h3>${name.common}<small> area : ${area}</small></h3> 
    </div>`
    return html;
}


let form = document.getElementById("form")
form.addEventListener("submit",(e)=> {
    e.preventDefault()
    let searchBox = e.target.searchBox.value
    let searchText = searchBox.toLowerCase()
// console.log(searchText)

    fetch(`https://restcountries.com/v3.1/name/${searchText}`)
        .then(res => res.json())
        .then(res => countryApi(res))
})




