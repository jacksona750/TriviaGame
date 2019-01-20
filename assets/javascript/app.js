// Create global variables
var number = 60;
var intervalId;
var correct = 0;
var wrong = 0;
var unanswered = 0;
var timerRunning = true;
var correctAnswers = ["#correct1", "#correct2", "#correct3", "#correct4", "#correct5", "#correct6", "#correct7", "#correct8"];

var banner = $("<img>");    
banner.attr({
    'class': 'banner',
    'src': 'assets/images/friends_banner.jpg',
});
$(".display-4").prepend(banner);

// Countdown timer
function countdown () {
    $('span').show();
    $('.jumbotron,#start-button').hide();
    $('#show-timer').html("<h1> Time remaining: " + number + "</h1>");
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

// Function to display and decrease timer
function decrement () {
    number--;
    $('#show-timer').html("<h1>Time remaining: " + number + "</h1>");

    if (number === 0) {
        endGame();
    }
}

// Option to submit form to end game before the timer runs out
//$("#submit-form").on("click", endGame);

// Function that checks the user answers against the correct answer
function endGame () {

// If correct, add to correct answer score
for (var i = 0; i < correctAnswers.length; i++) {
    var result = $(correctAnswers[i]).is(":checked");
    console.log(result)
    if (result) {
        correct++;
    }
        else {
            wrong++;
        }
    }        
    // If incorrect, add to wrong answer score

    clearInterval(intervalId);
    $("#score-box").show();
    $("#score-box").html("<h2>Time's Up! <br> You answered " + correct + " questions right and missed " + wrong + ".</h2>");
    $("span").hide();
}

// On click function that hides the start button, displays the form and starts the timer
$('.btn').on('click', countdown);



