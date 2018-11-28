//Create a counter to track the user's score total
var counter = 0;
var targetNumber = 50;

$("#number-to-guess").text(targetNumber);

$(".crystal-image").on("click", function() {

    counter+= 10;

    alert("Your new score is " + counter);

    if(counter === targetNumber) {
        
        alert("You win!");
    }

    else if(counter >= targetNumber) {
        
        alert("You lose!");
    }
});