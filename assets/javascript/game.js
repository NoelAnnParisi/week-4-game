var statusOfGame = true, wins=0, lose=0, totalScore=0, winningNumber

//statusOfGame is true when points do not equal (in progress)
//statusOfGame is false when points equal has been guessed (completed) or they lose the game

var crystals = {
	crystal1 : $("#crystal1"),
	crystal2 : $("#crystal2"),
	crystal3 : $("#crystal3"),
	crystal4 : $("#crystal4")
}


var randomNumber = function randomNumber() {

	statusOfGame = true;

	for(let prop in crystals) {

		crystals[prop] = Math.floor((Math.random() * 12) + 1);
		console.log(crystals);

	};

	winningNumber = Math.floor((Math.random() * 120) + 19);

	$("#randomNumber").html(winningNumber);

}


var winnah = function winnah() {

	wins += 1;
	$("#wins").html("You've won this many times: " + wins);
	statusOfGame = false;
	confirm("YOU'VE WON!! Do you want to play again?");
		if (true) {
			restartGame();
		} else {

 			alert("Bye Felicia!");

 		}

}

var loser = function loser() {

	lose += 1;
 	$("#lose").html("You've lost this many times: " + lose);
 	statusOfGame = false;
 	var numberOff = totalScore - winningNumber;

 	confirm("Looks like you over guessed by " + numberOff + " points. Do you want to play again?");
 		if (true) {
 			restartGame();
 		} else {

 			alert("Bye Felicia!");

 		}

}

var restartGame = function restartGame() {

	$("#randomNumber").empty();
	$(".score").empty();
	totalScore = 0;
	randomNumber();
	console.log('i am resetting' + totalScore)
	console.log(crystals);

}

var addingPoints = function addingPoints() {

	$("#crystal1").on("click", function() {
		totalScore += crystals.crystal1;
		$(".score").html(totalScore);
		console.log("The total score is: " + totalScore + "the winning number is " + winningNumber);
		console.log("number of wins " + wins +" number of loses: " + lose);

		if (winningNumber === totalScore) {

			winnah();
		} 

		if (totalScore > winningNumber) {

			loser();
		}
	});


	$("#crystal2").on("click", function() {
		totalScore += crystals.crystal2;
		$(".score").html(totalScore);
		console.log("The total score is: " + totalScore + "the winning number is " + winningNumber);
		console.log("number of wins " + wins +" number of loses: " + lose);

		if (winningNumber === totalScore) {

			winnah();
		}

		if (totalScore > winningNumber) {

			loser();
		}

	});


	$("#crystal3").on("click", function() {
		totalScore += crystals.crystal3;
		$(".score").html(totalScore);
		console.log("The total score is: " + totalScore + "the winning number is " + winningNumber);
		console.log("number of wins " + wins +" number of loses: " + lose);

		if (winningNumber === totalScore) {

			winnah();
		}

		if (totalScore > winningNumber) {

			loser();
		}
	});


	$("#crystal4").on("click", function() {
		totalScore += crystals.crystal4;
		$(".score").html(totalScore);
		console.log("The total score is: " + totalScore + "the winning number is " + winningNumber);
		console.log("number of wins " + wins +" number of loses: " + lose);

		if (winningNumber === totalScore) {

			winnah();
		}

		if (totalScore > winningNumber) {

			loser();
		}
	});



};	


//need function to "restart" the game when the win has been incremented
/////////////////////////////////////////////////////////////////////////////////////////////
if (statusOfGame = true) {

	randomNumber();
	addingPoints();
}

