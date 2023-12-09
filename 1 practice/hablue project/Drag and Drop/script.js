const dragArea = document.querySelector(".container"),
dragText = dragArea.querySelector("h2")
button = dragArea.querySelector("button")
input = dragArea.querySelector("input")


let Myfile;

button.onclick = () => {
    input.click()
}


input.addEventListener("change", function (){
    Myfile = this.files[0];
    dragArea.classList.add("active")
    showMe()
})


dragArea.addEventListener("dragover", (e) => {
        e.preventDefault()
        dragArea.classList.add("active")
        dragText.innerText = "Replace to uplood file"
})

dragArea.addEventListener("dragleave", () => {
    dragArea.classList.remove("active")
    dragText.innerText = "Drag & Drop"

})

dragArea.addEventListener("drop", (event) => {
    event.preventDefault()
    Myfile = event.dataTransfer.files[0];
    showMe()
})


function showMe (){
    let fileType = Myfile.type
    let vaildEx = ["image/jpeg", "image/jpg", "image/png"]

    if(vaildEx.includes(fileType)){
        let fileReader = new FileReader()

        fileReader.onload = () => {
            let imgUrl = fileReader.result;
            let img = `<img src="${imgUrl}" alt="">`

            dragArea.innerHTML = img
        }
        fileReader.readAsDataURL(Myfile)

    }else{
        alert("This file is not vaild")
        dragArea.classList.remove("active")
        dragText.innerText = "Drag & Drop"

    }



}