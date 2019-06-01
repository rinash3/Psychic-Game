 //declare a variable named compChoices and we set it equal to an array that contains our choices
 var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];

 var wins = 0;
 var losses = 0;
 var guessesLeft = 10;
 var guessesSoFar = [];

 var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];

 document.onkeyup = function(event) {

     var userGuess = event.key;
     // compares letter selected by user to the one selected by the computer
     //if the same we reset our counters and start a new game
     if (userGuess === compGuess) {
         guessesLeft = 10;
         guessesSoFar = [];
         wins++;

         // if userGuess and compChoice are different we change number of guesses left 
         //push - Add a new item to an array

     }

     if (userGuess != compGuess) {
         guessesLeft--;
         guessesSoFar.push(userGuess);

         // if guesses left reached 0:
         // guessesLeft and guessesSoFar are reset 
         // losses adds 1

         if (guessesLeft < 1) {
             guessesLeft = 10;
             guessesSoFar = [];
             losses++;
         }
     }
     // updates html  - innerHTML Change the HTML content of a <p> element with id="":
     document.getElementById('wins').innerHTML = "Wins: " + wins;
     document.getElementById('losses').innerHTML = "Losses: " + losses;
     document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
     document.getElementById('guessesSoFar').innerHTML = "Guesses So Far: " + guessesSoFar;


 }