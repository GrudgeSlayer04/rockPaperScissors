var playerSelection;
var computerSelection;
var playerScore = 0;
var computerScore = 0;

const buttons = document.querySelectorAll('input');

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
            // console.log("You lose! Paper beats Rock!");
            // return "You lose! Paper beats Rock!";
            document.getElementById('resultsActual').innerText = "You lose! Paper beats rock!";
            document.getElementById('scoreboardActual').innerText = "Player: " + playerScore + " // Computer: " + computerScore;
        }
        else if(computerSelection === 'Scissors'){
            playerScore++;
            // return "You win! Rock beats Scissors!"
            document.getElementById('resultsActual').innerText = "You win! Rock beats scissors!";
            document.getElementById('scoreboardActual').innerText = "Player: " + playerScore + " // Computer: " + computerScore;
        }
        else if(playerSelection === computerSelection){
            // return "Tie! No points awarded.";
            document.getElementById('resultsActual').innerText = "Tie! No points awarded.";
            document.getElementById('scoreboardActual').innerText = "Player: " + playerScore + " // Computer: " + computerScore;
        }
    }
    else if(playerSelection === 'Paper'){
        if(computerSelection === 'Rock'){
            playerScore++;
            // return "You win! Paper beats Rock!";
            document.getElementById('resultsActual').innerText = "You win! Paper beats Rock!";
            document.getElementById('scoreboardActual').innerText = "Player: " + playerScore + " // Computer: " + computerScore;
        }
        else if(computerSelection === 'Scissors'){
            computerScore++;
            // return "You lose! Scissors beats Paper!"
            document.getElementById('resultsActual').innerText = "You lose! Scissors beats Paper!";
            document.getElementById('scoreboardActual').innerText = "Player: " + playerScore + " // Computer: " + computerScore;
        }
        else if(playerSelection === computerSelection){
            // return "Tie! No points awarded.";
            document.getElementById('resultsActual').innerText = "Tie! No points awarded.";
            document.getElementById('scoreboardActual').innerText = "Player: " + playerScore + " // Computer: " + computerScore;
        }
    }
    else if(playerSelection === 'Scissors'){
        if(computerSelection === 'Paper'){
            playerScore++;
            // return "You win! Scissors beats Paper!";
            document.getElementById('resultsActual').innerText = "You win! Scissors beats Paper!";
            document.getElementById('scoreboardActual').innerText = "Player: " + playerScore + " // Computer: " + computerScore;
        }
        else if(computerSelection === 'Rock'){
            computerScore++;
            // return "You lose! Rock beats Scissors!"
            document.getElementById('resultsActual').innerText = "You lose! Rock beats Scissors!";
            document.getElementById('scoreboardActual').innerText = "Player: " + playerScore + " // Computer: " + computerScore;
        }
        else if(playerSelection === computerSelection){
            // return "Tie! No points awarded.";
            document.getElementById('resultsActual').innerText = "Tie! No points awarded.";
            document.getElementById('scoreboardActual').innerText = "Player: " + playerScore + " // Computer: " + computerScore;
        }
    } else {
        // return "Undeteremined error";
        document.getElementById('resultsActual').innerText = "Undetermined error.";
    }

    if(playerScore == 5)
    {
        document.getElementById('scoreboardActual').innerText = "Player victory! Reload page to play again.";
        disableButtons();
    }
    else if(computerScore == 5)
    {
        document.getElementById('scoreboardActual').innerText = "Computer victory! Reload page to play again.";
        disableButtons();
    }
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

let counter = 0;

function test()
{
    counter++;
    console.log(counter);
}

function playerRock(){
    // console.log(playRound('Rock', computerPlay()));
    // playerSelection = 'Rock';
    playRound('Rock', computerPlay());
}

function playerPaper(){
    // console.log(playRound('Paper', computerPlay()));
    // playerSelection = 'Paper';
    playRound('Paper', computerPlay());
}

function playerScissors(){
    // console.log(playRound('Scissors', computerPlay()));
    // playerSelection = 'Scissors';
    playRound('Scissors', computerPlay());
}

function game(){

    // for(var i = 0; i < 5; i++){
    playerSelection = window.prompt("Type one of the following : Rock, Paper, or Scissors.");
    alert(playRound(playerSelection, computerPlay()));
    alert('Player score : ' + playerScore + ", Computer score : " + computerScore);
    // }

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



// game();

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