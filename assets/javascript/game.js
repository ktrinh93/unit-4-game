
$(document).ready(function() {
    // selects all buttons and number fields
    var blue = $("#blue-gem");
    var red = $("#red-gem");
    var green = $("#green-gem");
    var purple = $("#purple-gem");
    var randomNum = $("#rand-num");
    var message = $("#message");
    var wins = $("#wins");
    var losses = $("#losses");
    var score = $("#score");

    // vars representing the value of each crystal
    var blueValue;
    var redValue;
    var greenValue;
    var purpleValue;
    
    // boolean to control end of game button lockouts
    var timeout = false;

    var crystalValues = [];

    // function to start/restart/reset the game state
    function start() {
        // assigns target number [19-120]
        randomNum.text(generateRandomNumber(19, 120));
        
        assignCrystalValues();

        // resets score, win/loss text, and timeout lock
        score.text(0);
        message.text("");
        timeout = false;
    }
    
    // start/play the game
    start();

    // if the crystals are clicked and the game is not in timeout
    // add the crystal's value to the player's current score
    blue.on("click", function() {
        if(!timeout) {
            score.text(parseInt(score.text()) + blueValue);
        }
    });
    red.on("click", function() {
        if(!timeout) {
            score.text(parseInt(score.text()) + redValue);
        }
    });
    green.on("click", function() {
        if(!timeout) {
            score.text(parseInt(score.text()) + greenValue);
        }
    });
    purple.on("click", function() {
        if(!timeout) {
            score.text(parseInt(score.text()) + purpleValue);
        }
    });

    // after every crystal click, checks for win or loss
    $(".click-crystals").on("click", function() {
        // checks for loss
        if(parseInt(score.text()) > parseInt(randomNum.text())) {
            // this timeout means the code only runs exactly once
            // when this condition occurs
            if(!timeout) {
                // increment losses, displays message, restarts
                losses.text(parseInt(losses.text()) + 1);
                message.text("You lost!");
                restart();
                timeout = true;
            }
        }
        // checks for win
        else if(parseInt(score.text()) === parseInt(randomNum.text())) {
            // this timeout means the code only runs exactly once
            // when this condition occurs
            if(!timeout) {
                // increment wins, displays message, restarts
                wins.text(parseInt(wins.text()) + 1);
                message.text("You won!");
                restart();
                timeout = true;
            }
        }
    });

    // restart function with added delay
    function restart() {
        setTimeout(start, 2500);
    }

    // helper function to generate random numbers between bounds
    function generateRandomNumber(lower, upper) {
        return Math.floor((Math.random()*upper)+lower);
    }

    // helper function to assign *unique* values to crystals
    function assignCrystalValues() {

        // assigns each crystal a unique value [1-12]
        blueValue = generateRandomNumber(1, 12);
        crystalValues.push(blueValue);

        redValue = generateRandomNumber(1, 12);
        while(crystalValues.includes(redValue)) {
            redValue = generateRandomNumber(1, 12);
        }
        crystalValues.push(redValue);

        greenValue = generateRandomNumber(1, 12);
        while(crystalValues.includes(greenValue)) {
            greenValue = generateRandomNumber(1, 12);
        }
        crystalValues.push(greenValue);

        purpleValue = generateRandomNumber(1, 12);
        while(crystalValues.includes(purpleValue)) {
            purpleValue = generateRandomNumber(1, 12);
        }
        crystalValues.push(purpleValue);

        // console logging for ease of testing
        console.log("blueValue: " + blueValue);
        console.log("redValue: " + redValue);
        console.log("greenValue: " + greenValue);
        console.log("purpleValue: " + purpleValue);
    }
});