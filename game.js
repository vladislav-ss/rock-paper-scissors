const optionButtons = document.querySelectorAll('div.cards button');
const roundResults = document.querySelector('#roundResults');
const scoreBoardP = document.querySelector('#scoreP');
const scoreBoardC = document.querySelector('#scoreC');

// Computer choice //

function getComputerPlay() {
    let random = Math.floor(Math.random()*3);
    switch(random){
        case(0):
            return "0";
            break;
        case(1):
            return "1";
            break;
        default:
            return "2";
    }
}

// Get player choice //

let playerChoice;
optionButtons.forEach((button)=>{button.addEventListener('click',()=>{

    if (button.id == "0") {
        playerChoice = 0;
    }
    else if (button.id == "1") {
        playerChoice = 1;
    }
    else if (button.id == "2") {
        playerChoice = 2;
    }
    playGame(playerChoice, getComputerPlay());
    })

});

// plays a round //

let computerScore = 0;
let playerScore = 0;

function playGame(player, computer) {
    if (player == computer){
        roundResults.textContent = 'Round result: Tie! You both chose the same card.';
    }
    else if (player == 0 && computer == 2) {
        playerScore++;
        roundResults.textContent = 'Round result: Won! You picked Rock, the computer picked Scissors';
    }
    else if (player == 1 && computer == 0) {
        playerScore++;
        roundResults.textContent = 'Round result: Won! You picked Paper, the computer picked Rock';
    }
    else if (player == 2 && computer == 1) {
        playerScore++;
        roundResults.textContent = 'Round result: Won! You picked Scissors, the computer picked Paper';
    }
    else if (player == 2 && computer == 0) {
        computerScore++;
        roundResults.textContent = 'Round result: Lost! You picked Scissors, the computer picked Rock';
    }
    else if (player == 0 && computer == 1) {
        computerScore++;
        roundResults.textContent = 'Round result: Lost! You picked Rock, the computer picked Paper';
    }
    else if (player == 1 && computer == 2) {
        computerScore++;
        roundResults.textContent = 'Round result: Lost! You picked Paper, the computer picked Scissors';
    }
    scoreBoardC.textContent = computerScore;
    scoreBoardP.textContent = playerScore;
}