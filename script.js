let playerWins = 0;
let computerWins = 0;
let round = 1;

/* NEW CODE */

const buttons = document.querySelectorAll('button');
const labelRound = document.querySelector(".round");
labelRound.textContent = "Round: 1";
const result = document.querySelector(".result");
const finalResult = document.querySelector(".finalResult");



buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {

        // Get the class of the clicked button
        let buttonClass = event.target.classList[0];

        if (round <= 5) {


            result.textContent = playRound(buttonClass, getRandomChoice());

            if (result.textContent !== "It's a tie. Repeating round.") {

                round++;
            }


        }

        labelRound.textContent = (round !== 6) ? "Round: " + round : playerWins + " : " + computerWins + "\n" +
            ((playerWins > computerWins) ? "You won the game!" : "You lost the game.");

    });
});

/* NEW CODE */

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
        return "You won!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerWins++;
        console.log(playerSelection + " " + computerSelection);
        return "You lost."
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        console.log(playerSelection + " " + computerSelection);
        return "It's a tie. Repeating round."
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        playerWins++;
        console.log(playerSelection + " " + computerSelection);
        return "You won!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerWins++;
        console.log(playerSelection + " " + computerSelection);
        return "You lost."
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log(playerSelection + " " + computerSelection);
        return "It's a tie. Repeating round."
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWins++;
        console.log(playerSelection + " " + computerSelection);
        return "You won!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerWins++;
        console.log(playerSelection + " " + computerSelection);
        return "You lost."
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log(playerSelection + " " + computerSelection);
        return "It's a tie. Repeating round."
    } else {
        return "Unknown command"
    }
}

function game() {

    while (round <= 5) {

        alert(
            "Round: " + round + "\n" +
            "Player wins: " + playerWins + "\n" +
            "Computer wins: " + computerWins
        );

        let playerSelection = prompt("Enter choice:");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getRandomChoice();

        alert(
            playerSelection + " " + computerSelection + "\n" +
            playRound(playerSelection, computerSelection)
        );

    }

    alert(
        playerWins + " : " + computerWins + "\n" +
        ((playerWins > computerWins) ? "You won the game!" : "You lost the game.")
    );

    playerWins = 0;
    computerWins = 0;
    round = 1;

}



