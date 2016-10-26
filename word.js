// require your letter objects
var letter = require('./letter.js');
var Word = function(wrd){
// property to store the string wrd
	this.chosenword = wrd;
// a collection of letter objects
	this.lettersInWord = [];
// property is the word found?
	this.found = false;

	this.getLets = function() {
// populate the collection above with new Letter objects
			this.lettersInWord.push("h");

	};
	
	//found the current word
	this.didWeFindTheWord = function() {
		//sets this.found in the word object to true or false if all letter objects have a true value in their appear property
		if(/*that every Letter Object has the value appear:true*/){
			this.found = true;
		}else{
			this.found = false;
		}
	

		return this.found;
	};

	this.checkIfLetterFound = function(guessLetter) {

// iterate through the collection of letter Objects
	for(var i = 0; i < this.lettersInWord.length){
		if(guessLetter == this.lettersInWord[i]){	
// iterate through every LetterObject and cmopare guessLetter vs LetterOject.letter

//.every(array) iterates through all the objects and if it's condition matches returns true (whatToReturn) 
		}
	}
// if guessLetter matches Letter property, the letter object should be shown
		return whatToReturn;
	};

	this.wordRender = function() {
// render the word based on if letters are found or not found

		return str;
	};
}

// export to use in main.js
module.exports = word;