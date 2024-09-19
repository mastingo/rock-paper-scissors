#!/usr/bin/env node
const prompt = require("prompt-sync")();

let humanScore = 0;
let computerScore = 0 


let computerChoice;
function getComputerChoice() {
    // Generate a random index between 0 and 2
    const choiceIndex = Math.floor(Math.random() * 3);
    if (choiceIndex === 0) {
        computerChoice = 'scissors';
    } else if (choiceIndex === 1) {
        computerChoice = 'rock';
    } else {
        computerChoice = 'paper';
    }
    console.log(`Computer chose: ${computerChoice}`);
    return computerChoice;
}


let rock = 'rock'
let scissors = 'scissors'
let paper = 'paper'
let humanChoice 


function getHumanChoice(){
	humanChoice = prompt('You chose: ');
	if (humanChoice != scissors && humanChoice != paper && humanChoice != rock){
		console.log('please enter `rock` `paper` or `scissors`')
		return null
	}else{
		return humanChoice
	}
}

function finalResult() {
    console.log(`Computer chose: ${computerChoice}`);
    console.log(`You chose: ${humanChoice}`);

    if (humanChoice === computerChoice) {
        console.log('It\'s a tie!');
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        console.log('You win this round!');
        humanScore++;
    } else {
        console.log('Computer wins this round!');
        computerScore++;
    }

    console.log(`Score: You - ${humanScore}, Computer - ${computerScore}`);
}


for (let i = 0; i < 5; i++) {
    console.log(`\nRound ${i + 1}`);
    
    getComputerChoice();
    getHumanChoice();

    if (humanChoice) { // Only run if humanChoice is valid
        finalResult();
    } else {
        console.log('Invalid choice, try again.');
        i--; // Repeat this round if input is invalid
    }
}

// Final score after 5 rounds
console.log('\nFinal Score:');
console.log(`You: ${humanScore}`);
console.log(`Computer: ${computerScore}`);

if (humanScore > computerScore) {
    console.log('You win the game!');
} else if (computerScore > humanScore) {
    console.log('Computer wins the game!');
} else {
    console.log('The game is a tie!');
}