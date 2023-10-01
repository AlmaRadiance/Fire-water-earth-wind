
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
const playRound = (playerSelection, computerSelection) 

//write new function game() 
//Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
//use loop or call playRound function 5 times in a row
//use console.log() for results and winner
//use prompt() to get input from user

const game = () => {
    for (let i=0; i<5; i++) {
        const playerSelection = promt ("choose what power element to use: 'fire', 'water','wind','earth'") 
        console.log(playRound (playerSelection, computerSelection))
    }
}



function openPopup() {
    document.getElementById('popup-container').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup-container').style.display = 'none';
}
