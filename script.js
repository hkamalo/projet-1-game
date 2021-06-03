// 1.Éléments à utiliser//

// 1.1.Joueurs//
import whatCpuSelected from './cpu';

const cpuImage = document.querySelector('.cpuImageChoice');
const newPlayer = document.querySelector('#playerName');
const playerImage = document.querySelector('.playerImageChoice');

// 1.2.Bouttons//
const buttonsSelector = document.querySelectorAll('#threeChoice button');

/*const rockButton = document.querySelector('.rockChoice');
const paperButton = document.querySelector('.paperChoice');
const scissorsButton = document.querySelector('.scissorsChoice');*/

// 1.3.Jeu//

const imgOfTheSelection = {
  rock:
    'https://www.pierrefeuilleciseaux.fr/wp-content/uploads/sites/5/2013/10/pierre-300x300.png',
  paper:
    'https://www.pierrefeuilleciseaux.fr/wp-content/uploads/sites/5/2013/10/feuille-300x300.png',
  scissors:
    'https://www.pierrefeuilleciseaux.fr/wp-content/uploads/sites/5/2013/10/ciseaux-300x300.png',
};

let roundNumber = 0;
let playerScore = 0;
let cpuScore = 0;
const score = document.querySelector('#results');
const roundInGame = document.querySelector('#round');
const maximumROund = 5;

//Fonctions//
const theWinnerIs = () => {
  if (playerScore > cpuScore) {
    return `The winner is ${newPlayer.innerHTML} with a score of ${playerScore}-${cpuScore}`;
  }
  if (playerScore < cpuScore) {
    return `The winner is CPU with a score of ${cpuScore}-${playerScore}`;
  }
};

const cpuSelection = () => {
  const cpuButtonSelected = whatCpuSelected();

  cpuImage.src = imgOfTheSelection[cpuButtonSelected];

  return cpuButtonSelected;
};

const resetTheGame = () => {
  roundNumber = 0;
  playerScore = 0;
  cpuScore = 0;
};

//Règle du jeu//
const gamesRule = (cpuChoice, playerChoice) => {
  if (cpuChoice === playerChoice) {
    console.log(`It's a draw, try again !`);
    roundNumber -= 1;
  } else if (
    (cpuChoice === 'rock' && playerChoice === 'scissors') ||
    (cpuChoice === 'paper' && playerChoice === 'rock') ||
    (cpuChoice === 'scissors' && playerChoice === 'paper')
  ) {
    cpuScore += 1;
  } else {
    playerScore += 1;
  }
};

const gameStartOnClick = (event) => {
  if (roundNumber >= maximumROund) {
    playerImage.src = './src/start-screen.png';
    cpuImage.src = './src/start-screen.png';
    window.alert(theWinnerIs());
    resetTheGame();
  } else {
    const cpuChoice = cpuSelection();
    const playerChoice = event.target.id;
    playerImage.src = imgOfTheSelection[playerChoice];
    gamesRule(cpuChoice, playerChoice);
    roundNumber += 1;

    roundInGame.innerHTML = `Round n°${roundNumber}`;
    score.innerHTML = `Score : CPU ${cpuScore}pt(s) - ${newPlayer.innerHTML} ${playerScore}pt(s)`;
  }
};

//Mise en place//
for (let i = 0; i < buttonsSelector.length; i += 1) {
  button = buttonsSelector[i];

  button.addEventListener('click', gameStartOnClick);
}
