let playerWins = 0;
let computerWins = 0;

let roundNumber = 1;
const round = document.getElementById('round');
round.innerHTML = roundNumber;

function game(playerSelection) {

    const computerSelection = getRandomChoice();
    const resultDiv = document.getElementById('result');


    resultDiv.innerHTML = playRound(playerSelection, computerSelection);

    // Update the score display
    updateScore();



    if (roundNumber === 5) {
        endGame();
    }
}

function updateRound() {
    roundNumber++;
}

function updateScore() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.innerHTML = `Player: ${playerWins} | Computer: ${computerWins}`;
}

function endGame() {

    resultDiv.innerHTML = "";
    const resultDiv = document.getElementById('result');
    if (playerWins > computerWins) {
        resultDiv.innerHTML += "<br>You won the game!";
    } else if (computerWins > playerWins) {
        resultDiv.innerHTML += "<br>You lost the game.";
    } else {
        resultDiv.innerHTML += "<br>It's a tie.";
    }

    // Optionally, reset the game by resetting playerWins and computerWins
    playerWins = 0;
    computerWins = 0;
}



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
        playerWins++;
        return "You won!"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerWins++;
        return "You lost."
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a tie."
    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        playerWins++;
        return "You won!"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerWins++;
        return "You lost."
    } else if (playerSelection == "gamepaper" && computerSelection == "paper") {
        return "It's a tie."
    }

    if (playerSelection == "scissors" && computerSelection == "paper") {
        playerWins++;
        return "You won!"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerWins++;
        return "You lost."
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a tie."
    }



}


