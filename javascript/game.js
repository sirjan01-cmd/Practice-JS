// In the browser console, in Node.js we use the readline module to get user input.
//
// Here’s your number guessing game rewritten for Node.js:

const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let randomNumber = Math.floor(Math.random() * 11); // 0 to 10
let isCorrect = false;

function askGuess() {
  rl.question("Enter your guess (0-10): ", (answer) => {
    let guessedNumber = parseInt(answer, 10);

    if (guessedNumber === randomNumber) {
      console.log("🎉 Congratulations! You guessed it right!");
      isCorrect = true;
      rl.close();
    } else if (guessedNumber < randomNumber) {
      console.log("Your guess is too low. Try again.");
      askGuess(); // ask again
    } else {
      console.log("Your guess is too high. Try again.");
      askGuess(); // ask again
    }
  });
}

askGuess();