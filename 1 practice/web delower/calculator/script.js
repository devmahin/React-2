let display = document.getElementById("display1")
let btn = document.querySelectorAll("#btn button")


for( let i=0; i<btn.length; i++){
    let btns = btn[i]

btns.addEventListener("click", (e)=> {
    e.preventDefault()

    let text = e.target.innerText;

    if(text === "="){
        let result = eval(display.value)
        display.value = result

    }else if(text === "AC"){
        display.value = ""

    }else{
        display.value += text
    }
})

}


