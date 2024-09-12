function getComputerChoice() {
    random = Math.random();

    if (random < 1/3) {
        return "rock";
    }  else if (random < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    choice = prompt("Give your choice (rock, paper, or scissors): ");
    return choice.toLowerCase();
}

humanScore = 0;
computerScore = 0;

function playRound() {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    if (computerChoice === "rock") {
        if (humanChoice === "rock") {
            console.log("It's a tie!");
        } else if (humanChoice === "paper") {
            console.log("You win! Paper beats Rock!")
            humanScore++;
        } else {
            console.log("You lose! Scissors lose to Rock!")
            computerScore++;
        }
    else if (computerChoice === "paper") {
        if (humanChoice === "paper") {
            console.log("It's a tie!");
        } else if (humanChoice === "scissors") {
            console.log("You win! Scissors beats Paper!")
            humanScore++;
        } else {
            console.log("You lose! Rock loses to Paper!")
            computerScore++;
        }
    } else {
        if (humanChoice === "scissors") {
            console.log("It's a tie!");
        } else if (humanChoice === "rock") {
            console.log("You win! Rock beats Scissors!")
            humanScore++;
        } else {
            console.log("You lose! Paper loses to Scissors!")
            computerScore++;
        }
    }

    
   
