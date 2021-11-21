const choices = ["Rock", "Paper", "Scissors"];

// Function that randomly selects an index of the above array,
// between 0, 1 and 2. Outputs either "Rock", "Paper" or "Scissors"
// in the console.
const computerPlay = () => {
  const index = Math.floor(Math.random() * choices.length);
  return index;
};

const playRound = (playerSelection, computerSelection) => {
    const rock = "rock"
  // 1. Make the playerSelection Case Insensitive ✅
  if (playerSelection.toUpperCase() === rock.toLocaleUpperCase()) {
    console.log(`You Lose! Paper beats ${playerSelection}`);
  }
  // 2. Write a function that plays a single round of Rock Paper Scissors.
  // The function should take two parameters - the playerSelection and computerSelection.
  // 3. Return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
  console.log()
};

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
