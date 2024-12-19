const countries = ['USA', 'CANADA', 'INDIA', 'AUSTRALIA', 'GERMANY', 'FRANCE', 'SPAIN'];
let chosenCountry = '';
let displayedWord = [];
let guessedLetters = [];
let remainingGuesses = 10;

function startGame() {
    const randomIndex = Math.floor(Math.random() * countries.length);
    chosenCountry = countries[randomIndex].toUpperCase();
    displayedWord = Array(chosenCountry.length).fill('_');
    guessedLetters = [];
    remainingGuesses = 10;

    updateGameDisplay();
}

function updateGameDisplay() {
    document.getElementById('word-display').textContent = displayedWord.join(' ');
    document.getElementById('used-letters').textContent = `Used Letters: ${guessedLetters.join(', ')}`;
    document.getElementById('remaining-guesses').textContent = `Guesses Remaining: ${remainingGuesses}`;
    
    if (displayedWord.join('') === chosenCountry) {
        document.getElementById('game-status').textContent = 'You Win!';
    } else if (remainingGuesses === 0) {
        document.getElementById('game-status').textContent = `Game Over! The country was ${chosenCountry}.`;
    }
}

function handleGuess() {
    const guess = document.getElementById('guess-input').value.toUpperCase();
    if (guess && !guessedLetters.includes(guess) && guess.length === 1) {
        guessedLetters.push(guess);

        if (chosenCountry.includes(guess)) {
            for (let i = 0; i < chosenCountry.length; i++) {
                if (chosenCountry[i] === guess) {
                    displayedWord[i] = guess;
                }
            }
        } else {
            remainingGuesses--;
        }

        document.getElementById('guess-input').value = '';
        updateGameDisplay();
    }
}

document.getElementById('guess-button').addEventListener('click', handleGuess);

startGame();
