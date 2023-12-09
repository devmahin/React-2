const form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()

    let fname = e.target.fname.value    
    let lname = e.target.lname.value
    let email = e.target.email.value
    let password = e.target.password.value
    let country = e.target.country.value
    let address = e.target.address.value



    let info = {
        fname,
        lname,
        email,
        password,
        country,
        address
    }
    console.log(JSON.stringify(info))
    

})