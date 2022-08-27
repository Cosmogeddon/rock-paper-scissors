
let computerChoice;
let playerChoice;
let options = ['rock', 'paper', 'scissors'];

function getPlayerChoice() {
    playerChoice = prompt('Do you choose Rock, Paper, or Scissors?').toLowerCase();
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors'){
        console.log(`You chose ${playerChoice}.`)
        return playerChoice;
    } else console.log ('Error! Select one of the previous options.')
        return getPlayerChoice();
}

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * options.length);
    switch (computerChoice){
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
        break;
    }
    return computerChoice;
}
// Runs a round of RPS
let result;
let computerScore = 0;
let playerScore = 0;

function playRound(computerSelection, playerSelection) {
    if (computerChoice === playerChoice) {
        result = 'Tie'
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        result = 'You lose! Scissors beats paper.';
        computerScore = ++computerScore;
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        result = 'You lose! Rock beats scissors.';
        computerScore = ++computerScore;
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        result = 'You lose! Paper beats rock.';
        computerScore = ++computerScore;
    } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        result = 'You win! Rock beats scissors.';
        playerScore = ++playerScore;
    } else if (computerChoice === 'rock' && playerChoice === 'paper') {
        result = 'You win! Paper beats rock';
        playerScore = ++playerScore;
    } else if (computerChoice === 'paper' && playerChoice === 'scissors'){
        result = 'You win! Scissors beats paper.';
        playerScore = ++playerScore;
    } else {
        result = 'You broke the game.'
    }
    return result;
}
// I had difficulty since the scores kept adding to previous games
function resetScore() {
    computerScore = 0;
    playerScore = 0;
}

// This logs 5 rounds. Not sure if I need a return or if it needs to be unlogged and simply call the function.


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getComputerChoice(), getPlayerChoice()));
        console.log(`Player wins: ${playerScore}`, `Computer wins: ${computerScore}`);
    }
}
