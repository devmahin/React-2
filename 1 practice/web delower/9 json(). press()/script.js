let form = {
    name : "mahin",
    fatherName : "Babul Howlader"
}
localStorage.setItem("form", JSON.stringify(form))



const username = localStorage.getItem("form")
console.log(JSON.parse(username))