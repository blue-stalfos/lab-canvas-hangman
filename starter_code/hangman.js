var hangman;

function Hangman() {
	this.words = ['purple', 'apple', 'Ironhack', 'word', 'encapsulation', 'deoxyribonucleic']
	this.secretWord = '' + this.getWord;
	this.letters = [];
};

Hangman.prototype.getWord = function () {
	return this.words[(Math.round(Math.random() * this.words.length))];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
	if(/^[a-z]+$/i.test(keyCode)) { return true; } 
		else { return false; };
};

Hangman.prototype.checkClickedLetters = function (key) {
	if(this.letters.indexOf(key === -1)) { return true; }
			else { return false; }
	});
};

// Hangman.prototype.addCorrectLetter = function (i) {

// };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
	hangman = new Hangman();
};


document.onkeydown = function (e) {

};
