
let rounds;
let playerSelection;
let computerSelection;
let score = 0;

PlayGame();

function PlayGame() {
    
    rounds = prompt("How many rounds do you want to play?");

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

function PlayRound() {

    playerSelection = prompt("Type in rock, paper or scissors to play.");
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
    console.log(result)
    return result;
}

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
