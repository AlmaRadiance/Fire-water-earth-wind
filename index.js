
//create a function that randomly return fire, water, wind, earth
const computerPlay = () => {
    const arrOfChoices = ['fire','water','wind','earth']
    const randomNum = Math.floor (Math.random ()* 4)
    const compChoice = arrOfChoices [randomNum]
        return compChoice
}

//write a function that plays single round of fire, water, wind, earth with 2 parameters 
//Returns a string that declares the winner & make function playerSelection insensitive 
//return results of function
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (
        (playerSelection === 'fire' && computerSelection === 'wind') ||
        (playerSelection === 'water' && computerSelection === 'fire') ||
        (playerSelection === 'wind' && computerSelection === 'water') ||
        (playerSelection === 'earth' && computerSelection === 'wind')
    ) {
        return 'You win this round!';
    } else {
        return 'You lose this round!';
    }
}


//write new function game() 
//Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
//use loop or call playRound function 5 times in a row
//use console.log() for results and winner
//use prompt() to get input from user

const game = () => {
    for (let i=0; i<5; i++) {
        const playerSelection = prompt ("choose what power element to use: 'fire', 'water','wind','earth'");
        const computerSelection = computerPlay(); 
        console.log(playRound (playerSelection.toLowerCase(), computerSelection));
    }
}


//Opening and closing popup windows
function openPopup() {
    document.getElementById('popup-container').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup-container').style.display = 'none';
}




// Add an event listener to the "Rules", "scores", "round" link
document.getElementById('rules-link').addEventListener('click', () => {
    openPopup(); // Call the openPopup() function when the link is clicked
});

document.getElementById('scores-link').addEventListener('click', () => {
    openPopup(); // Call the openPopup() function when the link is clicked
});

document.getElementById('rounds-link').addEventListener('click', () => {
    openPopup(); // Call the openPopup() function when the link is clicked
});