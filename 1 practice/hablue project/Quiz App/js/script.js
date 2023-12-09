let btn = document.querySelector(".btn button")
let rulesBox = document.querySelector(".rulseBox")
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let question = document.querySelector(".question")


btn.onclick = () => {
    rulesBox.classList.add("activeinfo")

}
btn1.onclick  = () => {
    rulesBox.classList.remove("activeinfo")
}

btn2.onclick = () => {
    rulesBox.classList.remove("activeinfo")
    question.classList.add("activeQuiz")
    showQuestion(0)
}




const nextBtn = document.querySelector(".nextBtn")
let que_count =0;

nextBtn.onclick = () => {
    if(que_count< questions.length -1){
        que_count++
        showQuestion(que_count)
    }else{
        console.log("You have compleat your task;")
    }
}


function showQuestion(index){
    const text = document.querySelector(".text")
    const myOption = document.querySelector(".myOption")
    let myOption_tag = "<div class='option'><span>"+ questions[index].Options[0] +"</span></div>"
                        +"<div class='option'><span>"+ questions[index].Options[1] +"</span></div>"
                        +"<div class='option'><span>"+ questions[index].Options[2] +"</span></div>"
                        +"<div class='option'><span>"+ questions[index].Options[3] +"</span></div>"
                       

    let text_tag = "<span>" + questions[index].numb + "." + questions[index].question + "</span>"
    text.innerHTML = text_tag
    
    myOption.innerHTML = myOption_tag



    const total_que = document.querySelector(".total-que")
    let total_queTag = `<p>` + questions[index].numb + ` of 5</p>`
    total_que.innerHTML = total_queTag




    const option = myOption.querySelectorAll(".option") 
    for(let i=0; i<option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)")
    }
}



function optionSelected (asnwer){
    let userAns = asnwer.textContent;
    let correctAns = questions[que_count].answer; 

    let allOption = myOption.children.length

    if(userAns == correctAns){
        asnwer.classList.add("correct")

        console.log("Answer is Correct")
    }else{
        asnwer.classList.add("InCorrect")
        console.log("Answer Is Wrong")
    }

    // for(let i=0; i<allOption; i++){
    //     myOption.children[i].classList.add("disabled")
    // }
}

