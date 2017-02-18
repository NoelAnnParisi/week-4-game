//set variables and initilize functions 
var statusOfGame, addNumber, wins=0, lose=0, score=0, gameStats, crystalNumber, winningNumber 

var crystals = {
	crystal1 : $("#crystal1"),
	crystal2 : $("#crystal2"),
	crystal3 : $("#crystal3"),
	crystal4 : $("#crystal4")
};

console.log(crystals);
//use an asynch approach and in the end it might be easier
//statusOfGame is true when points do not equal (in progress)
//statusOfGame is false when points equal has been guessed (completed)
//function generate random number 
	//four each crystal and again at the start of each game
var randomNumber = function randomNumber() {

	for(let prop in crystals) {

		crystals[prop] = Math.floor((Math.random() * 12) + 1);
		console.log(crystals[prop]);
		// crystals.push(crystalNumber);
		console.log(crystals);
		//console.log(crystalNumber);


	};

	// addNumber
	winningNumber = Math.floor((Math.random() * 120) + 19);
	console.log(winningNumber);

};

//function for clicking on the crystals. 
	//depending on which crystal the number associated with it should add to the score
var clickOnCrystals = function clickOnCrystals () {

	if ($("#crystal1").on("click", randomNumber)) {
		//I only what thecrystal number not the winning number 
	}

};
//function to check points to total points
	// if it equals it increment wins
	// else increment lose
var checkGameStatus = function checkGameStatus() {


//function to add the crysyals points to the winning number 
	$("#crystal1").click(function() {
	  // var addedNumber = $("#crystal1").html();
	  	score = $(".score");
		score.text(crystals.crystal1);
		console.log("Is this working?");
		console.log(crystals.crystal1);

	});

	$("#crystal2").click(function() {
	  // var addedNumber = $("#crystal1").html();
	  	score = $(".score");
		score.text(crystals.crystal2);
		console.log("Is this working?");
		console.log(crystals.crystal2);

	});

	$("#crystal3").click(function() {
	  // var addedNumber = $("#crystal1").html();
	  	score = $(".score");
		score.text(crystals.crystal3);
		console.log("Is this working?");
		console.log(crystals.crystal3);

	});

	$("#crystal4").click(function() {
	  // var addedNumber = $("#crystal1").html();
	  	score = $(".score");
		score.text(crystals.crystal4);
		console.log("Is this working?");
		console.log(crystals.crystal4);

	});

}
//function to replace html elements
	//totalscore , wins, lose, random number
var htmlReplacer = function htmlReplacer () {

}

//function to "restart" the game when the win has been incremented
randomNumber();
checkGameStatus();
