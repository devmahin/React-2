let form = document.getElementById("form")


form.addEventListener("submit", (e) => {
    e.preventDefault()
// console.log("Ok")

let fname = e.target.fname.value
let lname = e.target.lname.value
let country = e.target.country.value
let email = e.target.email.value
let password = e.target.password.value




let info = {
    fname,
    lname,
    country,
    email,
    password
}
console.log(JSON.stringify(info))

})