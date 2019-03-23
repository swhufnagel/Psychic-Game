
var wins = 0;
var losses = 0;
var guesses = 9;
var chosen = [];
var computer = "";
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var playerChoice = "None";

computer = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computer);

document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('loses').innerHTML = "Losses: " + losses;
document.getElementById('guessleft').innerHTML = "Guesses left: " + guesses;
document.getElementById('guessed').innerHTML = "Your guesses so far: " + chosen;

document.onkeyup = function (event) {
    playerChoice = event.key;
    console.log("player: " + playerChoice);
    console.log("computer: " + computer);

    if (playerChoice === computer) {
        wins += 1;
        document.getElementById('wins').innerHTML = "Wins: " + wins;
        computer = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computer);
        alert("You won! :)")
        guesses = 9;
        document.getElementById('guessleft').innerHTML = "Guesses left: " + guesses;
        chosen = [];
        document.getElementById('guessed').innerHTML = "Your guesses so far: " + chosen;
    }
    else if (alphabet.indexOf(playerChoice)> -1) {

        if (playerChoice !== computer) {
            guesses -= 1;
            document.getElementById('guessleft').innerHTML = "Guesses left: " + guesses;
            chosen.push(playerChoice)
            document.getElementById('guessed').innerHTML = "Your guesses so far: " + chosen;
        }
    }
    if(alphabet.indexOf(playerChoice) === -1){
        alert("Please choose a letter in the alphabet");
    }
    if (guesses === 0) {
        losses += 1;
        alert("You lost! :(")
        guesses += 9
        document.getElementById('loses').innerHTML = "Loses: " + losses;
        document.getElementById('guessleft').innerHTML = "Guesses left: " + guesses;
        chosen = [];
        document.getElementById('guessed').innerHTML = "Your guesses so far: " + chosen;
        computer = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computer);
    }

}
