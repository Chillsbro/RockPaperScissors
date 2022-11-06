const values = {
  0: "rock",
  1: "paper",
  2: "scissors",
  rock: 0,
  paper: 1,
  scissors: 2,
};

const victory = {
  [values.rock]: values.scissors,
  [values.scissors]: values.paper,
  [values.paper]: values.rock,
};

const gameConfig = {
  totalRounds: 5,
};

const gameState = {
  roundsPlayed: [], // should look like ['cpu', 'player', 'cpu', 'draw', 'draw']
  //my wins/losses
  playerWins: 0,
  cpuWins: 0,
};

const gamesListElement = document.getElementById("games");
gamesListElement.innerText = JSON.stringify(gameState.roundsPlayed);

function getComputerMove() {
  return Math.floor(Math.random() * 3);
}

// add parameter for player's move
function doPlayerMove(playerChoice) {
  console.log(`player made move: ${values[playerChoice]}`);
  // generate computer move
  let cpuChoice = getComputerMove();

  // check if player move trumps computer move
  // add 'cpu' or 'player' or 'draw' (whoever won) to gameState.roundsPlayed
  if (victory[playerChoice] === cpuChoice) {
    gameState.roundsPlayed.push("You Win"); // I WIN!!!! [this round, at least.... muheheeheh]
    gameState.playerWins++;
  } else if (victory[cpuChoice] === playerChoice) {
    gameState.roundsPlayed.push("CPU won"); // CPU WINS. bleh. stupid.
    gameState.cpuWins++;
  } else {
    gameState.roundsPlayed.push("Tied"); // must be a draw!
  }

  gamesListElement.innerText = JSON.stringify(gameState.roundsPlayed);

  if (gameState.roundsPlayed.length === gameConfig.totalRounds) {
    doEndGame();
    return;
  }
  // check if we're at the end of the game
  //test

  // end the game and tell the player who won
  // set up for next game, maybe
}
function doEndGame() {
  rockbtn.disabled = true;
  paperbtn.disabled = true;
  scissorsbtn.disabled = true;
  if (gameState.playerWins > gameState.cpuWins) {
    winLose.innerText = "you won";
  } else if (gameState.cpuWins > gameState.playerWins) {
    winLose.innerText = "you lose";
  } else {
    winLose.innerText = "draw";
  }
  console.log(gameState);
}
function doResetRound() {
  gameState.roundsPlayed = [];
  gameState.playerWins = 0;
  gameState.cpuWins = 0;
  rockbtn.disabled = false;
  paperbtn.disabled = false;
  scissorsbtn.disabled = false;
  winLose.innerText = " ";
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
// reset round via user input
document.getElementById("reset").addEventListener("click", () => {
  doResetRound();
  gamesListElement.innerText = JSON.stringify((gameState.roundsPlayed = []));
});
// arrow function example
addEventListener("blah", () => {
  // execute this code when `blah` is fired
});

const rockbtn = document.getElementById("rock");
const paperbtn = document.getElementById("paper");
const scissorsbtn = document.getElementById("scissors");
//const winLose = document.getElementById("winlose");
const winLose = document.querySelector("#winlose");
console.log(winLose);
// hi im a test update!
