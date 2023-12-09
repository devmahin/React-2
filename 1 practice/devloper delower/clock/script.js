let Hours = document.getElementById("Hours")
let Minutes = document.getElementById("Minutes")
let Seconds = document.getElementById("Seconds")




setInterval(() => {
    let date = new Date()
    let H = date.getHours()
    let M = date.getMinutes()
    let S = date.getSeconds()


    Hours.innerText = H
    Minutes.innerText = M
    Seconds.innerText = S
}, 1000)