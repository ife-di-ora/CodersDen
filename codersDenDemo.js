/** QUESTION 1
 * this function takes a string of characters and moves it 10 places**/

function moveTen(s) {
  let moved = "";

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);

    // Check if the character is a lowercase letter
    if (charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0)) {
      let newCharCode =
        ((charCode - "a".charCodeAt(0) + 10) % 26) + "a".charCodeAt(0);
      moved += String.fromCharCode(newCharCode);
    }
    // Handle uppercase letters if needed
    else if (charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0)) {
      let newCharCode =
        ((charCode - "A".charCodeAt(0) + 10) % 26) + "A".charCodeAt(0);
      moved += String.fromCharCode(newCharCode);
    }
    // Leave non-alphabets unchanged
    else {
      moved += s[i];
    }
  }

  return moved;
}

let theWord = "";
while (theWord == "") {
  theWord = prompt("Enter a Word:");
}
console.log(moveTen(theWord));
/** END OF QUESTION 1**/

/** QUESTION 2 - VAPOUR WAVE**/

function vapourcode(string) {
  let vapouredstring = "";
  for (let i in string) {
    if (string[i] != " ") {
      vapouredstring += `${string[i]} `;
    }
  }

  return vapouredstring.trim();
}

console.log(vapourcode("lets go to the    movies"));
/** END OF QUESTION 2**/

/**************************************/

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
/** END OF QUESTION 3**/

/** QUESTION 6 - HOISTING **/
/**Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope

/**Example of Hoisting **/
x = 5;
var x;

/** END OF QUESTION 6 */
