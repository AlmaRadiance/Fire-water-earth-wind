let playerScore = 0;
let computerScore = 0;
let scores = Array.from({ length: 5 }, () => ({ player: 'Not played', computer: 'Not played', result: 'Not played' }));

const updateScores = () => {
    document.getElementById('player-score').textContent = `Player: ${playerScore}`;
    document.getElementById('computer-score').textContent = `Computer: ${computerScore}`;
}

const computerPlay = () => {
    const arrOfChoices = ['fire', 'water', 'wind', 'earth']
    const randomNum = Math.floor(Math.random() * 4)
    const compChoice = arrOfChoices[randomNum]
    return compChoice;
}

const openCustomPrompt = () => {
    document.getElementById('custom-prompt').style.display = 'block';
}

const closeCustomPrompt = () => {
    document.getElementById('custom-prompt').style.display = 'none';
}

const addCloseButton = () => {
    const closeButton = document.createElement('span');
    closeButton.className = 'close-button';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = closeCustomPrompt;
    document.querySelector('.custom-prompt').appendChild(closeButton);
}

const playRound = (playerSelection, computerSelection, round) => {
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
        playerScore++;
    } else {
        result = 'Lose';
        computerScore++;
    }

    scores[round - 1] = { player: playerSelection, computer: computerSelection, result };
    updateScores();






      // Display player and computer element images only when selections are made
      if (playerSelection && computerSelection) {
        const playerElementImage = document.getElementById('player-element-image');
        const computerElementImage = document.getElementById('computer-element-image');
        playerElementImage.src = `./Images/${playerSelection}.jpg`;
        computerElementImage.src = `./Images/${computerSelection}.jpg`;

        // Add bouncing animation
        playerElementImage.style.animation = 'bounce 1s';
        computerElementImage.style.animation = 'bounce 1s';

        setTimeout(() => {
            playerElementImage.style.animation = '';
            computerElementImage.style.animation = '';
        }, 1000);
    }



    

    // Hide messages from previous rounds
    document.querySelectorAll('.round-message').forEach(message => {
        message.style.display = 'none';
    });

    const roundResultMessage = document.createElement('p');
    roundResultMessage.classList.add(`round-message`, `round-${round}-message`);
    roundResultMessage.textContent = `You ${result.toLowerCase()} round ${round}!`;

    document.querySelector('.prompt-content').appendChild(roundResultMessage);



 // Display the game container
 document.querySelector('.game-container').style.display = 'block';




    return result;
}

const getCustomInput = () => {
    return new Promise(resolve => {
        openCustomPrompt();
        addCloseButton();

        document.querySelectorAll('.element-button').forEach(button => {
            button.addEventListener('click', () => {
                const playerSelection = button.innerText.toLowerCase();
                resolve(playerSelection);
            });
        });
    });
}

const gameWithCustomPrompt = async () => {
    let gameResults = [];
    for (let i = 0; i < 5; i++) {
        const playerSelection = await getCustomInput();
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection.toLowerCase(), computerSelection, i + 1);
        gameResults.push({ player: playerSelection, computer: computerSelection, result: roundResult });
    }

    displayScores(gameResults);

    const gameResultMessage = document.createElement('p');

    if (playerScore > computerScore) {
        gameResultMessage.textContent = `You win the game!`;
    } else if (playerScore < computerScore) {
        gameResultMessage.textContent = `You lose the game!`;
    } else {
        gameResultMessage.textContent = `It's a tie!`;
    }

    document.querySelector('.prompt-content').appendChild(gameResultMessage);

    return gameResults;
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
function displayScores(gameResults) {
    let tableHTML = "<h2>Scores</h2><table>";
    tableHTML += "<tr><th>Round</th><th>Your Choice</th><th>Computer's Choice</th><th>Result</th></tr>";
    gameResults.forEach((score, index) => {
        tableHTML += `<tr><td>${index + 1}</td><td>${score.player}</td><td>${score.computer}</td><td>${score.result}</td></tr>`;
    });
    tableHTML += "</table>";

    document.querySelector('#scores-popup .popup-content').innerHTML = tableHTML;
}

// Call the gameWithCustomPrompt function when the button is clicked
document.getElementById('start-button').addEventListener('click', async () => {
    await gameWithCustomPrompt(); 
});






