let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#player");
const compScorePara = document.querySelector("#comp");


const compChoice = () =>{
let options = ["rock","paper","scissors"];
    let index = Math.floor(Math.random()*3);
    return options[index];
}

const drawGame = () => {
msg.innerText = "Game is draw. Play Again";
msg.style.backgroundColor = "darkblue";
}

const showWinner = (userWin,userChoice,com) => {
 if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Yours ${userChoice} beats ${com}`;
    msg.style.backgroundColor = "green";
 }
 else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost! ${com} beats yours ${userChoice}`;
    msg.style.backgroundColor = "red";
 }
}

const playGame = (userChoice) => {
// Generate Comp choice
let com = compChoice();
 
if(userChoice === com)
{
    //draw game
    drawGame();
} else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = com === "paper" ? false : true ;
    }else if(userChoice === "paper"){
        userWin = com === "scissors" ? false : true ;
    }
    else {
        userWin = com === "rock" ? false : true ;
    }

    showWinner(userWin,userChoice,com);
}
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})