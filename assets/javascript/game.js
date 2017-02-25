var statusOfGame = true,
    wins = 0,
    lose = 0,
    totalScore = 0,
    winningNumber;
var crystalClickSound = new Audio('assets/audio/crystalClick.wav');
var otherClickSound = new Audio('assets/audio/otherClickSound.wav');
var loserSound = new Audio('assets/audio/loser.wav');
var winningSound = new Audio('assets/audio/winning.wav');
var restartSound = new Audio('assets/audio/restart.wav');


//statusOfGame is true when points do not equal (in progress)
//statusOfGame is false when points equal has been guessed (completed) or they lose the game

var crystals = {
    crystal1: $("#crystal1"),
    crystal2: $("#crystal2"),
    crystal3: $("#crystal3"),
    crystal4: $("#crystal4")
}


var randomNumber = function randomNumber() {

    statusOfGame = true;

    for (let prop in crystals) {

        crystals[prop] = Math.floor((Math.random() * 12) + 1);
        console.log(crystals);

    };

    winningNumber = Math.floor((Math.random() * 120) + 19);

    $("#randomNumber").html(winningNumber);

}


var winnah = function winnah() {

    winningSound.play();
    wins += 1;
    $("#wins").html("You've won this many times: " + wins);
    statusOfGame = false;
    $("#playAgain").html("<button type='button'>Restart?</button>");
    console.log("the winner function is running");

}

var loser = function loser() {

    loserSound.play();
    lose += 1;
    $("#lose").html("You've lost this many times: " + lose);
    statusOfGame = false;
    var numberOff = totalScore - winningNumber;
    $("#playAgain").html("<button type='button'>Restart?</button>");
    console.log("the loser function is running.");


}

var addingPoints = function addingPoints() {

    $("#crystal1").on("click", function() {
        totalScore += crystals.crystal1;
        $(".score").html(totalScore);
        crystalClickSound.play();

        if (winningNumber === totalScore) {
            winnah();
            console.log("this should call the winnah function");
        }

        if (totalScore > winningNumber) {

            loser();
            console.log("this should call the loser function");
        }
    });


    $("#crystal2").on("click", function() {
        totalScore += crystals.crystal2;
        $(".score").html(totalScore);
        otherClickSound.play();

        if (winningNumber === totalScore) {
            console.log("this should call the winnah function");
            winnah();
        }

        if (totalScore > winningNumber) {

            loser();
            console.log("this should call the loser function");
        }

    });


    $("#crystal3").on("click", function() {
        totalScore += crystals.crystal3;
        $(".score").html(totalScore);
        crystalClickSound.play();

        if (winningNumber === totalScore) {
            console.log("this should call the winnah function");
            winnah();
        }

        if (totalScore > winningNumber) {

            loser();
            console.log("this should call the loser function");
        }
    });


    $("#crystal4").on("click", function() {
        totalScore += crystals.crystal4;
        $(".score").html(totalScore);
        otherClickSound.play();

        if (winningNumber === totalScore) {
            console.log("this should call the winnah function");
            winnah();
        }

        if (totalScore > winningNumber) {

            loser();
            console.log("this should call the loser function");
        }
    });

};

///////////////////////////////////////////////////////////////////////////////////////
if (statusOfGame = true) {

    randomNumber();
    addingPoints();
}

////////////////////////////////////////////////////////////////////////////////////////
$("#playAgain").on("click", function() {

    restartSound.play();
    $("#randomNumber").empty();
    $(".score").empty();
    totalScore = 0;
    randomNumber();
    console.log("the restartGame function is running");

});
