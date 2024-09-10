// Rock paper scissors
const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerscoredisplay = document.getElementById("playerscoredisplay");
const computerscoredisplay = document.getElementById("computerscoredisplay");

let playerScore = 0;
let computerScore = 0;


function playgame(playerchoice){
    const computerchoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerchoice === computerchoice){
        result = "It's a Tie!"
    }
    else{
        switch(playerchoice){
            case "rock":
             result = (computerchoice === "scissors") ? "YOU WIN !" : "YOU LOSE !" ;  
             break;
            case "paper":
             result = (computerchoice === "rock") ? "YOU WIN !" : "YOU LOSE !" ;  
             break;
            case "scissors":
             result = (computerchoice === "paper") ? "YOU WIN !" : "YOU LOSE !" ;  
             break;
            
        }
    }
    playerDisplay.textContent = `Player: ${playerchoice}`;
    computerDisplay.textContent = `Computer : ${computerchoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText","redText");
    switch(result){
        case "YOU WIN !":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerscoredisplay.textContent = playerScore;
            break;
        case "YOU LOSE !":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerscoredisplay.textContent = computerScore;
            break;
        
    }
}