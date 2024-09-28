"use strict";
const words = [
    { word: "PROGRAMMING", hint: "Creating software and applications." },
    { word: "DEVELOPMENT", hint: "The process of developing something." },
    { word: "DESIGN", hint: "Plan and make something." },
    { word: "TECHNOLOGY", hint: "The application of scientific knowledge." },
    { word: "CODE", hint: "The language used to write software." }
];

let selected = words[Math.floor(Math.random() * words.length)];
let selectedWord = selected.word;
let hint = selected.hint;
let correctLetters = [];
let wrongLetters = [];

const wordElement = document.getElementById("word");
const hintElement = document.getElementById("hint");
const wrongLettersElement = document.getElementById("wrong-letters");
const keyboardElement = document.querySelector(".keyboard");
const restartButton = document.getElementById("restart");

function displayWord() {
    wordElement.innerHTML = selectedWord
        .split('')
        .map(letter => (correctLetters.includes(letter) ? letter : '_'))
        .join(' ');
}

function updateWrongLetters() {
    wrongLettersElement.innerHTML = `Wrong letters: ${wrongLetters.join(', ')}`;
}

function checkGameOver() {
    if (wrongLetters.length > 5) {
        alert("You lose ☹. The word was: " + selectedWord);
        resetGame();
    } else if (correctLetters.length === new Set(selectedWord.split('')).size) {
        alert("You win 🥳. The word was: " + selectedWord);
        resetGame();
    }
}

function resetGame() {
    correctLetters = [];
    wrongLetters = [];
    selected = words[Math.floor(Math.random() * words.length)];
    selectedWord = selected.word;
    hint = selected.hint;
    displayWord();
    updateWrongLetters();
    hintElement.innerHTML = "Hint: " + hint; // عرض التلميح
}

function createKeyboard() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    letters.split('').forEach(letter => {
        const button = document.createElement("button");
        button.innerText = letter;
        button.addEventListener("click", () => handleGuess(letter));
        keyboardElement.appendChild(button);
    });
}

function handleGuess(letter) {
    if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
            correctLetters.push(letter);
        }
    } else {
        if (!wrongLetters.includes(letter)) {
            wrongLetters.push(letter);
        }
    }
    displayWord();
    updateWrongLetters();
    checkGameOver();
}

restartButton.addEventListener("click", resetGame);

displayWord();
hintElement.innerHTML = "Hint: " + hint; // عرض التلميح عند البداية
createKeyboard();
