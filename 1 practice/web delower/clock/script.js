let box1 = document.getElementById("hours")
let box2 = document.getElementById("minutes")
let box3 = document.getElementById("seconds")


setInterval(() => {
    let date = new Date()

    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    box1.innerText = h
    box2.innerText = m
    box3.innerText = s

}, 1000)