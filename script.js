const rockBtn = document.querySelector("button.rock");
const paperBtn = document.querySelector("button.paper");
const scissorBtn = document.querySelector("button.scissors");

const user = document.querySelector("#player1");
const computer = document.querySelector("#player2");
const winElement = document.querySelector("#win");
const drawElement = document.querySelector("#draw");
const loseElement = document.querySelector("#lose");
let winner = null;
let playerChoice = null;
let computerChoice = null;

user.addEventListener("animationend", function () {
  showWinner();
});
computer.addEventListener("animationend", function () {
  showWinner();
});
rockBtn.addEventListener("click", function () {
  resetGame();
  playerChoice = "rock";
  computerChoice = getComputerChoice();
  user.classList.remove("paper", "scissors", "rock");
  user.classList.add("shake");
  computer.classList.remove("paper", "scissors", "rock");
  computer.classList.add("shake");
  if (computerChoice === "rock") {
    winner = null;
  } else if (computerChoice === "paper") {
    winner = "computer";
  } else if (computerChoice === "scissors") {
    winner = "player";
  }
});
paperBtn.addEventListener("click", function () {
  resetGame();
  playerChoice = "paper";
  computerChoice = getComputerChoice();
  user.classList.remove("paper", "scissors", "rock");
  user.classList.add("shake");
  computer.classList.remove("paper", "scissors", "rock");
  computer.classList.add("shake");
  if (computerChoice === "rock") {
    winner = "player";
  } else if (computerChoice === "paper") {
    winner = null;
  } else if (computerChoice === "scissors") {
    winner = "computer";
  }
});

scissorBtn.addEventListener("click", function () {
  resetGame();
  playerChoice = "scissors";
  computerChoice = getComputerChoice();
  user.classList.remove("paper", "scissors", "rock");
  user.classList.add("shake");
  computer.classList.remove("paper", "scissors", "rock");
  computer.classList.add("shake");
  if (computerChoice === "rock") {
    winner = "computer";
  } else if (computerChoice === "paper") {
    winner = "player";
  } else if (computerChoice === "scissors") {
    winner = null;
  }
});

function randomNumber() {
  return Math.floor(Math.random() * 3);
}
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[randomNumber()];
}

function userWins() {
  document.querySelector("#win").classList.remove("hidden");
}
function userLose() {
  document.querySelector("#lose").classList.remove("hidden");
}
function draw() {
  document.querySelector("#draw").classList.remove("hidden");
}

function resetGame() {
  winner = null;
  winElement.classList.add("hidden");
  loseElement.classList.add("hidden");
  drawElement.classList.add("hidden");
  computer.classList.remove("scissors");
  computer.classList.remove("paper");
  computer.classList.remove("rock");
  computer.classList.add("rock");
  user.classList.remove("scissors");
  user.classList.remove("paper");
  user.classList.remove("rock");
  user.classList.add("rock");
}
function showWinner() {
  user.classList.remove("shake");
  computer.classList.remove("shake");
  user.classList.add(playerChoice);
  computer.classList.add(computerChoice);
  if (winner === "player") {
    userWins();
  } else if (winner === "computer") {
    userLose();
  } else {
    draw();
  }
}
