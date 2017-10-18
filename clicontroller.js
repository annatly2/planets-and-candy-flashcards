var Deck = require("./deck.js");
var Card = require("./card.js");

function CliController(){
	inquirer.prompt([
	{
		type: "list",
		message: "Welcome to the this game of flashcards! To start, which deck would you like to choose from?",
		choices: ["Planets Deck", "Candy Deck"],
		name: "deckchoice"
	}])
	.then(function(inquirerResponse){
		if(inquirerResponse.deckchoice === "Planets Deck"){
			//run planets deck
			//else for candy deck
			//show question and then provide prompts below
			inquirer.prompt([
			{
				type: "list",
				message: "What action would you like to take?",
				choices: ["answer the question", "flip to see the answer", "skip this card to the next", "exit the game"],
				name: "action"
			}])
		}
	})
}

module.exports = CliController;