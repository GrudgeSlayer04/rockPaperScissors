var playerSelection;
var computerSelection;
var playerScore = 0;
var computerScore = 0;

function computerPlay() {
    var random = Math.floor(Math.random() * 3);
    if(random == 0){
        return 'Rock';
    }
    else if(random == 1){
        return 'Paper';
    }
    else if(random == 2){
        return 'Scissors';
    }
}

// console.log(computerPlay());

function playRound(playerSelection, computerSelection){
    if(playerSelection === 'Rock'){
        if(computerSelection === 'Paper'){
            computerScore++;
            return "You lose! Paper beats Rock!";
        }
        else if(computerSelection === 'Scissors'){
            playerScore++;
            return "You win! Rock beats Scissors!"
        }
        else if(playerSelection === computerSelection){
            return "Tie! No points awarded.";
        }
    }
    else if(playerSelection === 'Paper'){
        if(computerSelection === 'Rock'){
            playerScore++;
            return "You win! Paper beats Rock!";
        }
        else if(computerSelection === 'Scissors'){
            computerScore++;
            return "You lose! Scissors beats Paper!"
        }
        else if(playerSelection === computerSelection){
            return "Tie! No points awarded.";
        }
    }
    else if(playerSelection === 'Scissors'){
        if(computerSelection === 'Paper'){
            playerScore++;
            return "You win! Scissors beats Paper !";
        }
        else if(computerSelection === 'Rock'){
            computerScore++;
            return "You lose! Rock beats Scissors!"
        }
        else if(playerSelection === computerSelection){
            return "Tie! No points awarded.";
        }
    } else {
        return "Undeteremined error";
    }
}

function game(){

    for(var i = 0; i < 5; i++){
        playerSelection = window.prompt("Type one of the following : Rock, Paper, or Scissors.");
        alert(playRound(playerSelection, computerPlay()));
        alert('Player score : ' + playerScore + ", Computer score : " + computerScore);
    }

    if(playerScore > computerScore){
        alert.log("Player won!");
    }
    else if(computerScore > playerScore) {
        alert("Computer won!");
    }
    else if(playerScore === computerScore){
        alert("Tie game! That is statistically unlikely! (Impossible?)");
    }
}

game();

// var playerSelection = 'Rock';
// var computerSelection = 'Paper';
// console.log(playRound(playerSelection, computerSelection)); // player lose
// 
// playerSelection = 'Rock';
// computerSelection = 'Scissors';
// console.log(playRound(playerSelection, computerSelection)); // player win
// 
// playerSelection = 'Paper';
// computerSelection = 'Scissors';
// console.log(playRound(playerSelection, computerSelection)); // player lose
// 
// playerSelection = 'Paper';
// computerSelection = 'Rock';
// console.log(playRound(playerSelection, computerSelection)); // player win
// 
// playerSelection = 'Scissors';
// computerSelection = 'Rock';
// console.log(playRound(playerSelection, computerSelection)); // player lose
// 
// playerSelection = 'Scissors';
// computerSelection = 'Paper';
// console.log(playRound(playerSelection, computerSelection)); // player win