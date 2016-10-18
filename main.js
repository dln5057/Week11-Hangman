// require prompt to use to make the game 

//require the objects/exports you will use
var inquirer = require('inquirer');
prompt.start();

game = {
	wordBank : ['blue', 'green', 'black'],
	wordsWon : [],// count of words Found
	guessesRemaining : 10, //per word
	currentWrd : null, //the word object
	startGame : function (wrd){
		//make sure the user has 10 guesses
		if(guessesRemaining > 0){
			var randWord = this.wordsToPick;
			this.currentWrd = randWord[Math.floor(Math.random() * randWord.length)];
		}
		console.log(game.currentWrd)
		//get a random word from the array

		//populate currentWrd (made from Word constructor function) object with letters

		this.keepPromptingUser();

	}, 
	resetGuessesRemaining : function(){
		game.guessesRemaining = 0;
    // reset guess count for new game	
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {
		    // result is an object like this: { guessLetter: 'f' }
		    console.log(result);
		    
			  // console log the letter you chose

		    //this checks if the letter was found and if it is then it sets that specific letter in the word to be found
		    
		    //if the user guessed incorrectly minus the number of guesses they have left
				// and console.log if they were incorrect or correct
		    	
				//check if you win only when you are right
        //end game
			 
		    
		    // display the user how many guesses remaining
			
				// render the word 
				
				// display letters the user has guessed

			  // if user has remaining guesses and Word isn't found
			
				// if user has no guesses left, show them the word and tell them they lost
			
				// else show the user word and rendered
		    
		});
	}


};

game.startGame();
