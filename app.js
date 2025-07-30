let final_result = document.querySelector(".final_result");
let userScore=document.querySelector("#user-score");
let compScore=document.querySelector("#comp-score")


userScoreVal=0;
compScoreVal=0;

const compChoice=() =>{
    const choices = ["rock","paper","scissor"];
    let idx=Math.floor(Math.random()*3);
    return choices[idx];
}

const showWinner=(userWin) =>{
    if(userWin){
        console.log("you win");
        final_result.innerText="Congratulation,You win!";
        final_result.style.backgroundColor="green";
        userScoreVal+=1;
        userScore.innerText=userScoreVal;
        }
    else{
        console.log("computer win");
        final_result.innerText="You lost. Please try again!";
        final_result.style.backgroundColor="red";
        compScoreVal+=1;
        compScore.innerText=compScoreVal;
    }
}

const playGame = (userChoice) =>{
    let computerChoice=compChoice();
    console.log("User choice :",userChoice);
    console.log("Computer choice :",computerChoice);

    if(userChoice===computerChoice){
        console.log("draw")
        final_result.style.backgroundColor="black";
        final_result.innerText="It's draw. Please try again!";
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=computerChoice==="paper" ? false:true;
        }
        if(userChoice==="paper"){
            userWin=computerChoice==="scissor"?false:true;
        }
        if(userChoice==="scissor"){
            userWin=computerChoice==="rock" ? false:true;
        }
        showWinner(userWin);
    }
}

let choice=document.querySelectorAll(".choice");
choice.forEach((choice) => {

    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);

    })
})