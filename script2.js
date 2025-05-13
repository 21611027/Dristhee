const choices = ['rock', 'paper', 'scissors'];
let wins = 0, losses = 0, ties = 0;

const resultDiv = document.getElementById('result');
const winsSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const tiesSpan = document.getElementById('ties');
const resetButton = document.getElementById('reset');
const buttons = document.querySelectorAll('.choice');

// Event listeners for player's choice buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);
    updateScore(result);
    showResult(result, playerChoice, computerChoice);
  });
});

// Event listener for Reset button
resetButton.addEventListener('click', () => {
  wins = 0;
  losses = 0;
  ties = 0;
  updateDOMScores();
  resultDiv.textContent = "Game reset. Choose your weapon!";
});

// Generate a random choice for the computer
function getComputerChoice() {
  const index = Math.floor(Math.random() * 3);
  return choices[index];
}

// Determine the game result
function getResult(player, computer) {
  if (player === computer) return 'tie';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'win';
  }
  return 'loss';
}

// Update scores and DOM
function updateScore(result) {
  if (result === 'win') wins++;
  else if (result === 'loss') losses++;
  else ties++;
  updateDOMScores();
}

// Update the scoreboard display
function updateDOMScores() {
  winsSpan.textContent = wins;
  lossesSpan.textContent = losses;
  tiesSpan.textContent = ties;

  // Optional: quick fade animation
  [winsSpan, lossesSpan, tiesSpan].forEach(el => {
    el.style.opacity = '0.5';
    setTimeout(() => el.style.opacity = '1', 200);
  });
}

// Show the result of the round
function showResult(result, player, computer) {
  let message = `You chose ${player}, computer chose ${computer}. `;
  if (result === 'win') {
    message += "You win!";
  } else if (result === 'loss') {
    message += "You lose!";
  } else {
    message += "It's a tie!";
  }
  resultDiv.textContent = message;
}
