 // Create the header content
 const header = document.createElement('header');
 header.classList.add('header');
 const h1 = document.createElement('h1');
 h1.innerHTML = ` Welcome to the Elemental Adventure Game: <br> 
                 <div class="typewriter">
                     <span class="Rock">Rock</span> -
                     <span class="Paper">Paper</span> -
                     <span class="Scissors">Scissors</span> 
                 </div>`;
 const dropdown = document.createElement('div');
 dropdown.classList.add('dropdown');
 const dropbtn = document.createElement('button');
 dropbtn.classList.add('dropbtn');
 dropbtn.innerHTML = '<i class="fa-solid fa-bars"></i> Menu';
 const dropdownContent = document.createElement('div');
 dropdownContent.classList.add('dropdown-content');
 const rulesLink = document.createElement('a');
 rulesLink.id = 'rules-link';
 rulesLink.href = '#';
 rulesLink.innerText = 'Rules';
 const scoresLink = document.createElement('a');
 scoresLink.id = 'scores-link';
 scoresLink.href = '#';
 scoresLink.innerText = 'Scores';
 header.appendChild(h1);
 dropdownContent.appendChild(rulesLink);
 dropdownContent.appendChild(scoresLink);
 dropdown.appendChild(dropbtn);
 dropdown.appendChild(dropdownContent);
 header.appendChild(dropdown);
 
 // Create the start button content
 const startButtonDiv = document.createElement('div');
 startButtonDiv.classList.add('start-button');
 const startButton = document.createElement('button');
 startButton.classList.add('main-button');
 startButton.id = 'start-button';
 startButton.innerHTML = `<i class="material-icons-outlined">sports_esports</i> PLAY`;
 startButtonDiv.appendChild(startButton);





 // Create the footer content
const footer = document.createElement('footer');
footer.classList.add('footer');
footer.innerHTML = '&copy; 2023 ROCK-PAPER-SCISSORS - THE ODIN PROJECT | BY: ALMA P.';





 // Create the popup container for game rules
 const gameRulesPopup = document.createElement('div');
 gameRulesPopup.id = 'popup-container';
 gameRulesPopup.classList.add('popup');
 const gameRulesPopupContent = document.createElement('div');
 gameRulesPopupContent.classList.add('popup-content');
 const closeGameRulesPopup = document.createElement('span');
 closeGameRulesPopup.classList.add('close-popup');
 closeGameRulesPopup.setAttribute('onclick', 'closePopup()');
 closeGameRulesPopup.innerHTML = '&times;';
 gameRulesPopupContent.appendChild(closeGameRulesPopup);
 const gameRulesHeading = document.createElement('h2');
 gameRulesHeading.innerText = 'Game Rules';
 const gameRulesText = document.createElement('p');
 gameRulesText.style.fontWeight = 'normal';
 gameRulesText.innerHTML = `Welcome to the Rock-Paper-Scissors Game!
                          <h3>Rules</h3>
                          Get ready for a classic game of Rock-Paper-Scissors against the computer!
                          <ul>
                              <li>Each player selects either Rock, Paper, or Scissors.</li>
                              <li>The computer will also randomly choose one of the options.</li>
                              <li>The winner is determined based on the following rules:
                                  <ul>
                                      <li>Rock beats Scissors</li>
                                      <li>Scissors beats Paper</li>
                                      <li>Paper beats Rock</li>
                                  </ul>
                              </li>
                              <li>Prepare for an epic contest spanning five rounds. Every selection, every move, will determine the course of the battle.</li>
                              <li>With every round, the stage is set for the ultimate victor. Choose your move wisely, for in this game, only the sharpest will triumph!</li>
                          </ul>`;
 const gameRulesChooseMoveHeading = document.createElement('h3');
 gameRulesChooseMoveHeading.innerText = 'Choose Your Move';
 const gameRulesElements = document.createElement('div');
 gameRulesElements.classList.add('elements');
 const gameRulesElementsList = document.createElement('ul');
 const rockElement = document.createElement('li');
 rockElement.innerHTML = `<img class="img-bounce" src="./Images/r.jpg" alt="Rock" width="140" height="80">
                          <p>Rock</p>
                          <p style="font-weight: normal;">Solid and unyielding, Rock crushes Scissors but is covered by Paper.</p>`;
 const paperElement = document.createElement('li');
 paperElement.innerHTML = `<img class="img-bounce" src="./Images/p.jpg" alt="Paper" width="140" height="80">
                           <p>Paper</p>
                           <p style="font-weight: normal;">Thin and protective, Paper covers Rock but is cut by Scissors.</p>`;
 const scissorsElement = document.createElement('li');
 scissorsElement.innerHTML = `<img class="img-bounce" src="./Images/s.jpg" alt="Scissors" width="140" height="80">
                              <p>Scissors</p>
                              <p style="font-weight: normal;">Sharp and precise, Scissors cut Paper but are crushed by Rock.</p>`;
 gameRulesElementsList.appendChild(rockElement);
 gameRulesElementsList.appendChild(paperElement);
 gameRulesElementsList.appendChild(scissorsElement);
 gameRulesElements.appendChild(gameRulesElementsList);
 
 // Create the scores popup container
 const scoresPopup = document.createElement('div');
 scoresPopup.id = 'scores-popup';
 scoresPopup.classList.add('popup');
 const scoresPopupContent = document.createElement('div');
 scoresPopupContent.classList.add('popup-content');
 const closeScoresPopupButton = document.createElement('button');
 closeScoresPopupButton.classList.add('close-popup-button');
 closeScoresPopupButton.setAttribute('onclick', 'closeScoresPopup()');
 closeScoresPopupButton.innerText = 'Close';
 scoresPopupContent.appendChild(closeScoresPopupButton);
 
 // Append elements to the body
 document.body.appendChild(header);
 document.body.appendChild(startButtonDiv);
 document.body.appendChild(gameRulesPopup);
 gameRulesPopup.appendChild(gameRulesPopupContent);
 gameRulesPopupContent.appendChild(gameRulesHeading);
 gameRulesPopupContent.appendChild(gameRulesText);
 gameRulesPopupContent.appendChild(gameRulesChooseMoveHeading);
 gameRulesPopupContent.appendChild(gameRulesElements);
 document.body.appendChild(scoresPopup);
 scoresPopup.appendChild(scoresPopupContent);
 document.body.appendChild(footer);

 
 // Add event listeners
 document.getElementById('rules-link').addEventListener('click', () => {
     openPopup();
 });
 
 document.getElementById('scores-link').addEventListener('click', () => {
     openScoresPopup();
 });
 
 document.getElementById('start-button').addEventListener('click', async () => {
     await gameWithCustomPrompt();
 });
 
 // Define the closePopup and closeScoresPopup functions
 function closePopup() {
     document.getElementById('popup-container').style.display = 'none';
 }
 
 function closeScoresPopup() {
     document.getElementById('scores-popup').style.display = 'none';
 }



let playerScore = 0;
let computerScore = 0;
let scores = Array.from({ length: 5 }, () => ({ player: 'Not played', computer: 'Not played', result: 'Not played' }));

const updateScores = () => {
    document.getElementById('player-score').textContent = `Player: ${playerScore}`;
    document.getElementById('computer-score').textContent = `Computer: ${computerScore}`;
}

const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
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
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
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
        playerElementImage.src = `./Images/${playerSelection}.png`;
        computerElementImage.src = `./Images/${computerSelection}.png`;

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
       // addCloseButton();

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
        document.getElementById('win-sound').play(); // Play win sound
    } else if (playerScore < computerScore) {
        gameResultMessage.textContent = `You lose the game!`;
        document.getElementById('lose-sound').play(); // Play fail sound
    } else {
        gameResultMessage.textContent = `It's a tie!`;
        document.getElementById('tie-sound').play(); // Play tie sound

    }

    const promptContent = document.querySelector('.prompt-content');
    promptContent.innerHTML = ''; 

    promptContent.appendChild(gameResultMessage);
    return gameResults;
}




// Opening and closing popup windows
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






// Add an event listener to the "Rules", "scores" link
document.getElementById('rules-link').addEventListener('click', () => {
    openPopup(); // Call the openPopup() function when the link is clicked
});

document.getElementById('scores-link').addEventListener('click', () => {
    openScoresPopup(); 
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
 







 // Hide player and computer images for final message
 playerElementImage.style.display = 'none';
 computerElementImage.style.display = 'none';

// Add this after the gameResultMessage.textContent is set
const videoContainer = document.createElement('div');
videoContainer.classList.add('video-container');
videoContainer.style.width = '50%'; 
videoContainer.style.display = 'none';

let videoSource;

if (playerScore > computerScore) {
    videoSource = './Images/win.mp4';
} else if (playerScore < computerScore) {
    videoSource = './Images/lose.mp4';
} else {
    videoSource = './Images/tie.mp4';
}

const videoElement = document.createElement('video');
videoElement.src = videoSource;
videoElement.autoplay = true;
videoElement.loop = true;
videoElement.muted = true;
videoElement.style.width = '100%'; 

videoContainer.appendChild(videoElement);
document.querySelector('.prompt-content').appendChild(videoContainer);





















