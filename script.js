let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll('button');
const scoreLabel = document.querySelector(".score");
scoreLabel.textContent = "Player: 0 " + "Computer: 0";
const roundLabel = document.querySelector(".round");

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {

        // Get the class of the clicked button
        let buttonClass = event.target.classList[0];

        if (playerWins < 5 && computerWins < 5) {

            scoreLabel.textContent = "Player: " + playerWins +
                " " + "Computer: " + computerWins;

            roundLabel.textContent = playRound(buttonClass, getRandomChoice());
        }

        if (playerWins === 5 || computerWins === 5) {
            scoreLabel.textContent = "Player: " + playerWins +
                " " + "Computer: " + computerWins + " = " +
                ((playerWins > computerWins) ? "You won the game!" : "You lost the game.");
        }
    });
});

function getRandomChoice() {

    var number = Math.floor(Math.random() * 3) + 1;

    if (number === 1) {
        return "rock"
    } else if (number === 2) {
        return "paper"
    } else {
        return "scissors"
    }

}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWins++;
        console.log(playerSelection + " " + computerSelection);
        return playerSelection + " : " + computerSelection + " = " + "You won!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerWins++;
        console.log(playerSelection + " " + computerSelection);
        return playerSelection + " : " + computerSelection + " = " + "You lost."
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        console.log(playerSelection + " " + computerSelection);
        return playerSelection + " : " + computerSelection + " = " + "It's a tie."
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        playerWins++;
        console.log(playerSelection + " " + computerSelection);
        return playerSelection + " : " + computerSelection + " = " + "You won!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerWins++;
        console.log(playerSelection + " " + computerSelection);
        return playerSelection + " : " + computerSelection + " = " + "You lost."
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log(playerSelection + " " + computerSelection);
        return playerSelection + " : " + computerSelection + " = " + "It's a tie."
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWins++;
        console.log(playerSelection + " " + computerSelection);
        return playerSelection + " : " + computerSelection + " = " + "You won!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerWins++;
        console.log(playerSelection + " " + computerSelection);
        return playerSelection + " : " + computerSelection + " = " + "You lost."
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log(playerSelection + " " + computerSelection);
        return playerSelection + " : " + computerSelection + " = " + "It's a tie."
    } else {
        return "Unknown error"
    }
}

