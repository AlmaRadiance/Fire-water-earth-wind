//create a function that randomly return fire, water, wind, earth
const computerPlay = () => {
    const arrOfChoices = ['fire','water','wind','earth']
    const randomNum = Math.floor (Math.random ()* 4)
    const compChoice = arrOfChoices [randomNum]
    return compChoice;
}


// Define the function to open the custom prompt
const openCustomPrompt = () => {
    document.getElementById('custom-prompt').style.display = 'block';
}


// Define the function to close the custom prompt
const closeCustomPrompt = () => {
    document.getElementById('custom-prompt').style.display = 'none';
}

//write a function that plays single round of fire, water, wind, earth with 2 parameters 
//Returns a string that declares the winner & make function playerSelection insensitive 
//return results of function
let scores = Array.from({ length: 5 }, () => ({ player: 0, computer: 0, result: 'Not played' }));
const playRound = (playerSelection, computerSelection) => {
    let result;
    if (playerSelection === computerSelection) {
        result = 'Tie';
    } else if (
        (playerSelection === 'fire' && computerSelection === 'wind') ||
        (playerSelection === 'water' && computerSelection === 'fire') ||
        (playerSelection === 'wind' && computerSelection === 'water') ||
        (playerSelection === 'earth' && computerSelection === 'wind')
    ) {
        result = 'Win';
    } else {
        result = 'Lose';
    }


    scores.push({ player: playerSelection, computer: computerSelection, result });
    return result;
}

// Function to play the game using custom prompt
const gameWithCustomPrompt = async () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = await getCustomInput();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection.toLowerCase(), computerSelection));
    }
}

// Function to get custom input
const getCustomInput = () => {
    return new Promise(resolve => {
        openCustomPrompt();

        document.querySelectorAll('.element-button').forEach(button => {
            button.addEventListener('click', () => {
                const playerSelection = button.innerText.toLowerCase();
                closeCustomPrompt();
                resolve(playerSelection);
            });
        });
    });
}

//Opening and closing popup windows
function openPopup() {
    document.getElementById('popup-container').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup-container').style.display = 'none';
}

function openScoresPopup() {
    document.getElementById('scores-popup').style.display = 'block';
}

function closeScoresPopup() {
    document.getElementById('scores-popup').style.display = 'none';
}

// Add an event listener to the "Rules", "scores", "round" link
document.getElementById('rules-link').addEventListener('click', () => {
    openPopup(); // Call the openPopup() function when the link is clicked
});

document.getElementById('scores-link').addEventListener('click', () => {
    openScoresPopup(); 
});

document.getElementById('rounds-link').addEventListener('click', () => {
    openPopup(); 
});

// Display scores in a table
function displayScores() {
    let tableHTML = "<h2>Scores</h2><table>";
    tableHTML += "<tr><th>Round</th><th>Your Choice</th><th>Computer's Choice</th><th>Result</th></tr>";
    scores.forEach((score, index) => {
        tableHTML += `<tr><td>${index + 1}</td><td>${score.player}</td><td>${score.computer}</td><td>${score.result}</td></tr>`;
    });
    tableHTML += "</table>";

    document.querySelector('#scores-popup .popup-content').innerHTML = tableHTML;
}

displayScores();

// Call the gameWithCustomPrompt function when the button is clicked
document.getElementById('start-button').addEventListener('click', async () => {
    await gameWithCustomPrompt(); // Note the use of 'await' here
});








