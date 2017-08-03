


// generate a random letter and store it in a variable for later.
var computerChoices=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins=0;
var loses=0;
var guessesLeft=10;
var wrongGuesses=[];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// Promp user and ask them to guess a letter between a and z.
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// check to see if the letter is correct.
	if (userGuess === computerGuess) {
		alert("You guessed Correct!");
		// if user guesses the correct letter. add a win to record
		wins++;
		guessesLeft=10;
		wrongGuesses=[];
		//reset
	}
	else {
		alert("You guessed Wrong! Keep Guessing.....");
		guessesLeft--;
		wrongGuesses.push(userGuess);
	}

	if (guessesLeft === 0) {
		alert("Game Over! You used up all 10 guesses.");
		loses++;
		guessesLeft=10;
		wrongGuesses=[];
		computerGuess=computerChoices[Math.floor(Math.random()* computerChoices.length)];
	}
	// if letter is wrong prompt to the user to guess again and subtract guesses left. repeat until user gets the letter correct or if they used up all guesses.


	var html=
	"<p>Wins: " + wins + "</p>" +
	"<p>Loses: " + loses + "</p>" +
	"<p>Guesses Left: " + guessesLeft + "</p>" +
	"<p>Letters Guessed: " + wrongGuesses + "</p>";

	document.querySelector("#game").innerHTML = html;

};
