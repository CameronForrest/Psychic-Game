// Array for Alphabet
var randomLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

//Function for User selecting Letter
document.onkeydown = function(event) {

//Lets us know what key was pressed
var userGuess = event.key;

//Randomly chooses a letter from the array
var cpuGuess = randomLetter[Math.floor(Math.random() * randomLetter.length)]


//variable holding our wins and losses
var wins =0;
var losses =0;

//Varibles that hold refrences to java that we want to sidplay in HTML
var yourGuessesText = document.getElementById("yourGuesses-text");
var winsText = document.getElementById("wins-text");


//If we guess same as computer we win
if (userGuess === cpuGuess) {
    wins++;
}




//Display Java to HTML
yourGuessesText.textContent = "Your Guesses so far: " + userGuess;





}