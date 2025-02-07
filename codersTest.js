/** QUESTION 3 - ROCK PAPE SCISSORS **/
function rps(player1, player2) {
  const winConditions = {
    scissors: ["paper", "lizard"],
    paper: ["rock", "spock"],
    rock: ["scissors", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["rock", "scissors"],
  };

  // check that a valid input is provided
  let status;
  if (player1 in winConditions && player2 in winConditions) {
    if (player1.toLowerCase() == player2.toLowerCase()) {
      status = "Draw!";
    } else if (
      winConditions[player1.toLowerCase()].includes(player2.toLowerCase())
    ) {
      status = "Player 1 won!";
    } else {
      status = "Player 2 won!";
    }
  } else {
    status = "Invalid input. Please provide valid inputs";
  }
  return status;
}

console.log(rps("rock", "paper"));
