let values = {
  0: "rock",
  1: "paper",
  2: "scissors",
  rock: 0,
  paper: 1,
  scissors: 2,
};

let victory = {
  [values.rock]: values.scissors,
  [values.scissors]: values.paper,
  [values.paper]: values.rock,
};

const gameConfig = {
  totalRounds: 5,
};

let gameState = {
  roundsPlayed: [], // should look like ['cpu', 'player', 'cpu', 'draw', 'draw']
};

const gamesListElement = document.getElementById("games");
gamesListElement.innerText = JSON.stringify(gameState.roundsPlayed);

function getComputerMove() {
  return Math.floor(Math.random() * 2);
}

// add parameter for player's move
function doPlayerMove(playerChoice) {
  console.log(`player made move: ${values[playerChoice]}`);

  // generate computer move
  let cpuChoice = getComputerMove();

  // check if player move trumps computer move
  // add 'cpu' or 'player' or 'draw' (whoever won) to gameState.roundsPlayed
  if (victory[playerChoice] === cpuChoice) {
    gameState.roundsPlayed.push("player"); // I WIN!!!! [this round, at least.... muheheeheh]
  } else if (victory[cpuChoice] === playerChoice) {
    gameState.roundsPlayed.push("cpu"); // CPU WINS. bleh. stupid.
  } else {
    gameState.roundsPlayed.push("draw"); // must be a draw!
  }

  gamesListElement.innerText = JSON.stringify(gameState.roundsPlayed);

  // check if we're at the end of the game
  if (gameState.roundsPlayed.length >= gameConfig.totalRounds) {
    doResetRound();
    // end the game and tell the player who won
    // set up for next game, maybe
  }
}

function doResetRound() {
  gameState.roundsPlayed = [];
}

// in each of these, call playerChoice(*choice*) via an arrow function
document.getElementById("rock").addEventListener("click", () => {
  doPlayerMove(values.rock);
});
document.getElementById("paper").addEventListener("click", () => {
  doPlayerMove(values.paper);
});
document.getElementById("scissors").addEventListener("click", () => {
  doPlayerMove(values.scissors);
});

// arrow function example
addEventListener("blah", () => {
  // execute this code when `blah` is fired
});
