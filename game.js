// Generates the computer's choice
function computerPlay(){
    let random = Math.floor(Math.random()*3);
    switch(random){
        case(0):
            return "rock";
            break;
        case(1):
            return "paper";
            break;
        default:
            return "scissors";
    }
}

// Plays a round
function round(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return 'tie';
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
        return 'win';
        score++;
    }
    if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return 'win';
        score++;
    }
    if (playerSelection == 'paper' && computerSelection == 'rock'){
        return 'win';
        score++;
    } else {
        return 'lose';
    }

}

// Best of five game
function game(){
    let playerScore = 0;
    let compScore = 0;
    console.log('This is a Best of Five game of Rock Paper Scissors');

    let i;
    for(i = 0; i < 5; i++){
        let playerSelection = window.prompt('Choose by typing in rock, paper or scissors');
        playerSelection = playerSelection.toLowerCase();
        let result = round(playerSelection, computerPlay());
        result;
        console.log('\n');
        if (result == 'win'){
            playerScore++;
            console.log('You won the round!');
            console.log(`Score PLAYER - ${playerScore}   COMPUTER - ${compScore}`);
        } else if (result == 'lose') {
            console.log('You lost the round...');
            compScore++;
            console.log(`Score PLAYER - ${playerScore}   COMPUTER - ${compScore}`);
        } else {
            console.log('It is a tie!');
            console.log(`Score PLAYER - ${playerScore}   COMPUTER - ${compScore}`);
        }

    }

    console.log(`You won ${playerScore} rounds`);
    if (playerScore > compScore) {
        console.log('\nYou won the game!');
    } else if (playerScore == compScore) {
        console.log('It is a tie!');
    } else {
        console.log('\nYou lost the game...');
    }
    console.log(`Final score is P ${playerScore} - ${compScore} C`)
    }

// Initialize game
game();