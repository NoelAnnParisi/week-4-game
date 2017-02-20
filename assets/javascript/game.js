var statusOfGame = true, winnah, wins=0, lose=0, totalScore=0, addingPoints, winningNumber

var crystals = {
	crystal1 : $("#crystal1"),
	crystal2 : $("#crystal2"),
	crystal3 : $("#crystal3"),
	crystal4 : $("#crystal4")
};

console.log(crystals);
//statusOfGame is true when points do not equal (in progress)
//statusOfGame is false when points equal has been guessed (completed) or they lose the game

//generate random number for each crystal 
	var randomNumber = function randomNumber() {

		statusOfGame = true;

		for(let prop in crystals) {

			crystals[prop] = Math.floor((Math.random() * 12) + 1);
			console.log(typeof crystals[prop]);
			console.log(crystals);
		};

		//generate and add winning number to html 
		winningNumber = Math.floor((Math.random() * 120) + 19);
		console.log(winningNumber);
		$("#randomNumber").html(winningNumber);
		console.log("The total score is: " + totalScore + "the winning number is " + winningNumber)
	};


// $(".crystals").on("click", function() {
// 	console.log("What is happening?")
// 	console.log(totalScore);
//when the crystals are clicked add their value to the variable totalScore and display
		//add the value of each crystal to a total score
var addingPoints = function addingPoints (){

	$("#crystal1").on("click", function() {
	//display the total score
		totalScore += crystals.crystal1;
		console.log("the total score is : " + totalScore);
		$(".score").html(totalScore);
		console.log("The total score is: " + totalScore + "the winning number is " + winningNumber);
		console.log("number of wins " + wins +" number of loses: " + lose);
	});

	$("#crystal2").on("click", function() {
	//display the total score
		totalScore += crystals.crystal2;
		console.log("the total score is : " + totalScore);
		$(".score").html(totalScore);
		console.log("The total score is: " + totalScore + "the winning number is " + winningNumber);
		console.log("number of wins " + wins +" number of loses: " + lose);
	});

	$("#crystal3").on("click", function() {
	//display the total score
		totalScore += crystals.crystal3;
		console.log("the total score is : " + totalScore);
		$(".score").html(totalScore);
		console.log("The total score is: " + totalScore + "the winning number is " + winningNumber);
		console.log("number of wins " + wins +" number of loses: " + lose);
	});

	$("#crystal4").on("click", function() {
	//display the total score
		totalScore += crystals.crystal4;
		console.log("the total score is : " + totalScore);
		$(".score").html(totalScore);
		console.log("The total score is: " + totalScore + "the winning number is " + winningNumber);
		console.log("number of wins " + wins +" number of loses: " + lose);
	});

};	

//function to "restart" the game when the win has been incremented

/////////////////////////////////////////////////////////////////////////////////////////////

if (statusOfGame = true) {
	randomNumber();
	addingPoints();

	if (winningNumber === totalScore) {
		console.log("Is this running?")
		wins += 1;
		$("#wins").html("You've won this many times: " + wins);
		statusOfGame = false;

	}

	if (totalScore > winningNumber) {
		
		lose += 1;
	 	$("#lose").html("You've lost this many times: " + lose);
	 	statusOfGame = false;
	}
}
// } else {

// 	//restart the game
// }






