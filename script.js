const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerscoreDisplay = document.getElementById("playerscorceDisplay");
const computerscoreDisplay = document.getElementById("computerscorceDisplay");

let playerscore = 0;
let computerscore = 0;

function playgame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  if (result === "YOU WIN!") {
    playerscore++;
    playerscoreDisplay.textContent = playerscore;
    resultDisplay.classList.add("greenText");
  } else if (result === "YOU LOSE!") {
    computerscore++;
    computerscoreDisplay.textContent = computerscore;
    resultDisplay.classList.add("redText");
  }
}
