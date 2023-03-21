var guessedNumber;
var userInput;
var chances = 10;

function guessNumber() {
    guessedNumber = Math.floor(Math.random() * 100 + 1);
    document.getElementById('btn.play').style.display = "none";
    document.getElementById('submitGuess').style.display = "block";
    document.getElementById('guessinput').style.display = "block";
}

function submitGuess() {
    userInput = document.getElementById('guessinput').value
    if (userInput < 1 || userInput > 100) {
        alert("Please Enter a number Between 1 to 100");
        return
    }

    chances -= 1;
    if (chances == 0) {
        alert("Game End!! You Lose");
        return;
    }
    else {
        document.getElementById('user_chances').innerHTML = "You have left " + chances + " chances"
    }


    if (guessedNumber == userInput) {
        alert("Your Guess is correct")
        location.reload();
    }
    else if (guessedNumber > userInput) {
        alert("Your Guess is too low")
    } else if (guessedNumber < userInput) {
        alert("Your Guess is too high")
    }


}
