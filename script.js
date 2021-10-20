const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const WIN_ROUND_MESSAGE = "You win this round";
const LOSE_ROUND_MESSAGE = "You lost this round";
const TIE = "It's a tie!";
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

function computerPlay() {

    let decision = random(1,4);

    switch(decision) {
        case 1: return "rock"; break;
        case 2: return "paper"; break;
        case 3: return "scisors"; break;
    }

}

function playRound(playerSelection, computerSelection) {

    const playerScoreElement = document.querySelector(".player");
    const computerScoreElement = document.querySelector(".computer");
    const playerOptionImage = document.querySelector(".player-option");
    const computerOptionImage = document.querySelector(".computer-option");
    const roundNumberElement = document.querySelector("h2");


    if(playerSelection == "rock") {

        playerOptionImage.setAttribute("src", "./assets/Rock.jpg");

        switch(computerSelection) {

            case "paper":
            console.log(LOSE_ROUND_MESSAGE); 
            computerScore++;
            computerOptionImage.setAttribute("src", "./assets/Paper.jpg");
            computerScoreElement.textContent = computerScore;
            break;

            case "scisors":
            console.log(WIN_ROUND_MESSAGE); 
            playerScore++;
            computerOptionImage.setAttribute("src", "./assets/Scissors.jpg");
            playerScoreElement.textContent = playerScore;
            break;

            case "rock":  
            console.log(TIE); 
            computerScore++;
            playerScore++;
            computerOptionImage.setAttribute("src", "./assets/Rock.jpg");
            computerScoreElement.textContent = computerScore;
            playerScoreElement.textContent = playerScore;
            break;
        }

    } 

    if(playerSelection == "paper") {

        playerOptionImage.setAttribute("src", "./assets/Paper.jpg" );

        switch(computerSelection) {

            case "paper": 
            console.log(TIE); 
            computerScore++;
            playerScore++;
            computerOptionImage.setAttribute("src", "./assets/Paper.jpg");
            computerScoreElement.textContent = computerScore;
            playerScoreElement.textContent = playerScore;
            break;

            case "rock": 
            console.log(WIN_ROUND_MESSAGE); 
            playerScore++;
            computerOptionImage.setAttribute("src", "./assets/Rock.jpg");
            playerScoreElement.textContent = playerScore;
            break;

            case "scisors": 
            console.log(LOSE_ROUND_MESSAGE); 
            computerScore++;
            computerOptionImage.setAttribute("src", "./assets/Scissors.jpg");
            computerScoreElement.textContent = computerScore;
            break;
        }
    }

    if(playerSelection == "scisors") {

        playerOptionImage.setAttribute("src", "./assets/Scissors.jpg" );

        switch(computerSelection) {

            case "rock":
            console.log(LOSE_ROUND_MESSAGE); 
            computerScore++;
            computerOptionImage.setAttribute("src", "./assets/Rock.jpg");
            computerScoreElement.textContent = computerScore;
            break;

            case "scisors": 
            console.log(TIE); 
            computerScore++;
            playerScore++;
            computerOptionImage.setAttribute("src", "./assets/Scissors.jpg");
            computerScoreElement.textContent = computerScore;
            playerScoreElement.textContent = playerScore;
            break;

            case "paper": 
            console.log(WIN_ROUND_MESSAGE); 
            playerScore++;
            computerOptionImage.setAttribute("src", "./assets/Paper.jpg");
            playerScoreElement.textContent = playerScore;
            break;
        }

    }

    roundNumber++;
    roundNumberElement.textContent = roundNumber;

}

const buttons = document.querySelectorAll(".options");
buttons.forEach((btn) => {

    btn.addEventListener('click', () => {

        let playerOption = btn.getAttribute('id');
        let computerOption = computerPlay();
        console.log(playerOption);
        console.log(computerOption);

        playRound(playerOption, computerOption);

    });
})





