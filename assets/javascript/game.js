
$(document).ready(function() {
    var blue = $("#blue-gem");
    var red = $("#red-gem");
    var green = $("#green-gem");
    var purple = $("#purple-gem");
    var randomNum = $("#rand-num");
    var wins = $("#wins");
    var losses = $("#losses");
    var score = $("#score");

    var blueValue;
    var redValue;
    var greenValue;
    var purpleValue;
    var message = $("#message");

    function start() {
        // random number [19-120]
        randomNum.text(generateRandomNumber(19, 120));
        // each crystal [1-12]
        blueValue = generateRandomNumber(1, 12);
        redValue = generateRandomNumber(1, 12);
        greenValue = generateRandomNumber(1, 12);
        purpleValue = generateRandomNumber(1, 12);
        // after every button click

        console.log("blueValue: " + blueValue);
        console.log("redValue: " + redValue);
        console.log("greenValue: " + greenValue);
        console.log("purpleValue: " + purpleValue);

        wins.text(0);
        losses.text(0);
        score.text(0);
        message.text("");
    }
    
    start();

    blue.on("click", function() {
        score.text(parseInt(score.text()) + blueValue);
    });
    red.on("click", function() {
        score.text(parseInt(score.text()) + redValue);
    });
    green.on("click", function() {
        score.text(parseInt(score.text()) + greenValue);
    });
    purple.on("click", function() {
        score.text(parseInt(score.text()) + purpleValue);
    });

    $(".click-crystals").on("click", function() {
        // checks for loss
        if(parseInt(score.text()) > parseInt(randomNum.text())) {
            losses.text(parseInt(losses.text()) + 1);
            message.text("You lost!");
            setTimeout(start, 2500);
        }
        // checks for win
        else if(parseInt(score.text()) === parseInt(randomNum.text())) {
            wins.text(parseInt(wins.text()) + 1);
            message.text("You won!");
            setTimeout(start, 2500);
        }
    });

    function generateRandomNumber(lower, upper) {
        return Math.floor((Math.random()*upper)+lower)
    }
});