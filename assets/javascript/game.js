
var wins = 0;
var losses = 0;
var guesses = 5;
var chosen = null;
var computer = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var playerChoice = "";

computer = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computer);

document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('loses').innerHTML = "Losses: " + losses;
document.getElementById('guessleft').innerHTML = "Guess left: " + guesses;
document.getElementById('guessed').innerHTML = "Your guesses so far: " + chosen;

document.onkeyup = function (event) {
    playerChoice = event.key;
    console.log("player: " + playerChoice);
    console.log("computer: " + computer);

    if(playerChoice === computer){
        wins+=1;
        alert("You won! :)")
        document.getElementById('wins').innerHTML = "Wins: " + wins;
    }
    if(playerChoice !== computer){
        guesses-=1;
        document.getElementById('guessleft').innerHTML = "Guess left: " + guesses;
        chosen = chosen + " " + playerChoice;
        document.getElementById('guessed').innerHTML = "Your guesses so far: " + chosen;
    }
    if(guesses === 0){
        losses+=1;
        alert("You lost! :(")
        guesses +=4
        document.getElementById('loses').innerHTML = "Loses: " + losses;
        chosen = "None";
    }

}

document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('loses').innerHTML = "Loses: " + losses;
document.getElementById('guessleft').innerHTML = "Guess left: " + guesses;
document.getElementById('guessed').innerHTML = "Your guesses so far: " + chosen;