let playerWins = 0;
let computerWins = 0;
let round = 1;

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
        round++;
        console.log(playerSelection + " " + computerSelection);
        return "You won!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerWins++;
        round++;
        console.log(playerSelection + " " + computerSelection);
        return "You lost."
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        console.log(playerSelection + " " + computerSelection);
        return "It's a tie."
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        playerWins++;
        round++;
        console.log(playerSelection + " " + computerSelection);
        return "You won!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerWins++;
        round++;
        console.log(playerSelection + " " + computerSelection);
        return "You lost."
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log(playerSelection + " " + computerSelection);
        return "It's a tie."
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWins++;
        round++;
        console.log(playerSelection + " " + computerSelection);
        return "You won!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerWins++;
        round++;
        console.log(playerSelection + " " + computerSelection);
        return "You lost."
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log(playerSelection + " " + computerSelection);
        return "It's a tie."
    } else {
        return "Type rock, paper or scissors"
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
        playerWins +  " : " + computerWins  + "\n" +
        ((playerWins > computerWins) ? "You won the game!" : "You lost the game.")
    );

    playerWins = 0;
    computerWins = 0;
    round = 1;

}



