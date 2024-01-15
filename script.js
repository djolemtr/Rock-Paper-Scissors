function getRandomChoice() {

    var number = Math.floor(Math.random() * 3) + 1;

    if (number == 1) {
        return "rock"
    } else if (number == 2) {
        return "paper"
    } else {
        return "scissors"
    }

}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You won!"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lost!"
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a tie!"
    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        return "You won!"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lost!"
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a tie!"
    }

    if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You won!"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lost!"
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a tie!"
    }



}

const playerSelection = "scissors";
const computerSelection = getRandomChoice();

console.log(playerSelection + " " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
