
let rounds = 0;
let playerSelection;
let computerSelection;
let score = 0;

//PlayGame();
const buttons = document.querySelectorAll(".button");
buttons.forEach(button => button.addEventListener("click",function(e) {
    PlayRound(e.target.id);
    
}));



function PlayGame() {

    for (let i = 0; i < rounds; i++) {
        PlayRound();
        console.log("your score is " + score + " out of " + rounds);
    }
    console.log("Game over");
}

function GetComputerChoice() {

    let choice;
    let randomInt = randomIntFromInterval(1,3);

    switch(randomInt) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }

    return MakeLowerCase(choice);
}

function MakeLowerCase(text) {
    return text.toLowerCase();
}

function PlayRound(playerSelection) {
 
    computerSelection = GetComputerChoice();

    let result;


    switch(playerSelection) {
        case "rock":
            if (computerSelection === "rock") {
                result = "The computer picked rock, resulting in a tie!"
            } else if (computerSelection === "paper") {
                result = "The computer picked paper, You lose!"
            } else {
                result = "The computer picked scissors. You win!"
                score += 1;
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                result = "The computer picked rock. You win!"
                score += 1;
            } else if (computerSelection === "paper") {
                result = "The computer picked paper, resulting in a tie."
            } else {
                result = "The computer picked scissors. You lose!"
            }
            break;
        case "scissors":
            if (computerSelection === "rock") {
                result = "The computer picked rock. You lose!"
            } else if (computerSelection === "paper") {
                result = "The computer picked paper. You win!"
                score += 1;
            } else {
                result = "The computer picked scissors, resulting a tie!"
            }
            break;
        default:
            result = "That is not a valid selection."
    }
    rounds += 1;

    UpdateUI(result)
    return result;
}

function UpdateUI(result)
 {
    document.getElementById("result").innerHTML = result;

    let scoreString = "Your score is: " + score.toString() + " out of 5 rounds"
    console.log(rounds);
    if (rounds !== 5) {
        document.getElementById("tally").innerHTML = scoreString;
    } else {
        document.getElementById("tally").innerHTML = "Game Over!"
        rounds = 0;
        score = 0;
    }

 }
function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
