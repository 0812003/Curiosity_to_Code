var colors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
    if (!started) {
      randomNo();
      started = true;
    }
  });


function randomNo() {
    userClickedPattern=[];
    level++;
    $("h1").text("Level "+level);
    var ranNo = Math.floor(Math.random() * 4);
    // var choice = randomNo();

    var ranChoosenColor = colors[ranNo];

    gamePattern.push(ranChoosenColor);

    $("#" + ranChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound("sounds/" + ranChoosenColor + ".mp3");

    animatePress(ranChoosenColor);
}

$(".btn").click(function () {
    var userChosenColour = (this.id);
    userClickedPattern.push(userChosenColour);
    playSound("sounds/" + userChosenColour + ".mp3");
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})

function playSound(name) {
    var audio = new Audio(name);
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed")},100
    )
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
        console.log("win");
        if(userClickedPattern.length == gamePattern.length){
            setTimeout(function(){
                randomNo();
            },1000)
        }
    }
    else
    {
        console.log("Loss");
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)
        $("h1").text("Game Over, Press Any Key to Restart");
        $(document).keydown(function(){
        startOver();
        })
    }
    
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
    // $("h1").text("Press A Key to Start");
}