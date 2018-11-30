//Create a counter to track the user's score total
var counter = 0;
var wins = 0;
var losses = 0;
var numOptions = [];
var imgArray = [
    "assets/images/crystal_1.png",
    "assets/images/crystal_2.png",
    "assets/images/crystal_3.png",
    "assets/images/crystal_4.png",
];

randomNum();
var numberOptions = hiddenValue();
console.log(numberOptions);

for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", imgArray[i]);
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter+= crystalValue;

    if(counter === targetNumber) {
        wins++;
        counter = 0;
        $("#wins").text(wins);
        randomNum();
        numberOptions = hiddenValue();
        console.log(numberOptions);

    }

    else if(counter >= targetNumber) {
        losses++;
        counter = 0;
        $("#losses").text(losses);
        randomNum();
        numberOptions = hiddenValue();
        console.log(numberOptions); 
    }
    $("#total-score").text(counter);
});

function hiddenValue() {
    for (var i = 0; i < 4; i++) {
        numOptions[i] = Math.floor((Math.random() * 12) + 1);
    }
    return numOptions;    
}

function randomNum() {
    targetNumber = Math.floor((Math.random() * 102) + 19);
    $("#number-to-guess").text(targetNumber);
}

