// Asignment: Word-Guess-Game
// File: game.js
// Programmer: Sohail Zafar
// Note: I have added a console.log to display the computer's letter pick in the console window for testing purposes.

// Global variables
var alphabet = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessLeft = 9;
var randomLetter;
var usersKey;
var userLetterPicks = "";
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessLeftText = document.getElementById("guessLeft-text"); 
var inputText = document.getElementById("guessSoFar-text");

// Function: Random letter generator.
function ComputerGuess() {

    var randomNumber = Math.floor((Math.random() * 26) + 0);
    randomLetter = alphabet[randomNumber];
    console.log("Computer's Pick: " + randomLetter);
}


// Function: Capture keyboard events, update variables and perform game logic.
function keyEventAndGameLogic() {
    
    document.onkeyup = function (event) {
    usersKey = event.key;
    userLetterPicks += usersKey + ", ";
    inputText.textContent = userLetterPicks;
    guessLeft = guessLeft - 1;

    if (guessLeft <= 0){
        losses = losses + 1;
        userLetterPicks ="";
        guessLeft = 9;
        ComputerGuess();
    }
    
    if (usersKey === randomLetter){
        wins = wins + 1;
        userLetterPicks = ""; 
        guessLeft = 9;
        ComputerGuess();
       }
      updateUI();
    };
}

// Function: Display and update User Interface. 
function updateUI (){

winsText.textContent = wins;
lossesText.textContent = losses;
guessLeftText.textContent = guessLeft;
inputText.textContent = userLetterPicks;
}

// Call functions to play game.
ComputerGuess();
keyEventAndGameLogic();
updateUI();
