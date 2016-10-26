var Letter = function(let) {
// property to store the actual letter	
  this.letter = let;
// property/boolean if the letter can be shown 
  this.appear = false;

// 	this.letterRender = function() {
// 		//if appear is false then show the _
//     if(appear == false){
//       for(var i = 0; i < )

//       //else appear is true then show character
//     }else{

//     }
	this.letterRender = function() {
// should return "a" or "_"
  if(this.letterAppear == false) {
    return "_";
  } else {
    return this.letter;
  }
}
// 	};
// };

module.exports = letter;
// export to use in word.js



// do not use below this line, not commented out yet because i like syntax highlight

var test = new Letter('h');

test = {
  letter: "h",
  appear: false,
  letterRender: function() {
   //something
  }
}

console.log(test.letter) // "h"
console.log(test.appear) // false
