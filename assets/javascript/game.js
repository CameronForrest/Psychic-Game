// Array for Alphabet
var randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//variable holding our wins,losses,guesses
var wins = 0;
var losses = 0;
var guessesLeft = 10;

//Varibles that hold refrences to java that we want to sidplay in HTML
var yourGuessesText = document.getElementById("yourGuesses-text");
var winsText = document.getElementById("wins-text")
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessLeft-text");
var guessesSoFar = [];

//Randomly chooses a letter from the array
var cpuGuess = randomLetter[Math.floor(Math.random() * randomLetter.length)];
//Function for User selecting Letter
document.onkeydown = function (event) {

    //Lets us know what key was pressed
    var userGuess = event.key;

    //Determines if you win or loose 

    if (userGuess === cpuGuess) { //user wins
        wins++;
        guessesSoFar.push(userGuess)
        alert("You guessed it!  YOU WIN!!!")
        reset(); 
    }

    if (userGuess !== cpuGuess) { //Subtract guesses left if guesses do not match
        guessesLeft--;
        guessesSoFar.push(userGuess);



    }

    if (guessesLeft === 0) { //When there are no guesses left let user know they have
        losses++;
        reset();

    }


    //Display Java to HTML
    yourGuessesText.textContent = "Your Guesses so far: " + guessesSoFar.join();
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;



}

function reset() {
    guessesSoFar = [];
    guessesLeft = 10;

}

