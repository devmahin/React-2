fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(res => country(res))



    function country (country){
        let root = document.getElementById("root")
        // console.log(country)
        let countrys = ""

        country.forEach(value => {
            countrys += makeHtml(value)
        });
        root.innerHTML = countrys
    }

    function makeHtml(API){
        console.log(API)
        const {area,flags,name} = API
        const html = `
        <div>
            <img src="${flags.png}" alt="">
            <h2>${name.common}</h2>
            <h3>${area}</h3>
        </div>`

    return html
    }



    let form = document.getElementById("form")
    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const text = e.target.searchBox.value
        const textValue = text.toLowerCase()


        fetch(`https://restcountries.com/v3.1/name/${textValue}`)
        .then(res => res.json())
        .then(res => country(res))
    })