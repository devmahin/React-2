let display = document.getElementById("display1")
let btns =document.querySelectorAll("#btn")

for(let i=0; i<btns.length; i++){
    // console.log(btn[i])
    let btn = btns[i]

    btn.addEventListener("click", (e) => {
        e.preventDefault()
        let text = e.target.innerText
        // console.log(text)
        if(text === "="){
    let result = eval(display.value)
    display.value = result
// console.log(result)


        }else if(text === "AC"){

            display.value = ""
        }else{
            display.value += text
        }

    })   
}

