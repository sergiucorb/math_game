var playing = false;
var score = 0;
var action;
var timeRemaining;
var trueAnswer;
var randomBox;
var wrongAnswerRandom;

document.getElementById("start-reset").onclick = function () {
    if (playing == true) {
        location.reload();
    } else {
        score = 0;
        playing = true;
        timeRemaining = 60;
        show("time-remaining");
        startCountdown();
        document.getElementById("start-reset").innerHTML = "Reset Game";
        hide("game-over");
        generateQA();
    }
}
function startCountdown() {
    var counter = document.getElementById("timer");
    var action = setInterval(function () {
        timeRemaining = timeRemaining - 1;
        counter.innerHTML = timeRemaining + " sec";
        if (timeRemaining == 0) {
            stopCountdown();
            show("game-over");
            document.getElementById("finalScore").innerHTML = score;
            hide("time-remaining");
            hide("correctAnswer");
            hide("wrongAnswer");
            playing = true;
            document.getElementById("start-reset").innerHTML = "Start Game";
        }
    }, 1000);
}
function stopCountdown() {
    clearInterval(action);
}
function hide(Id) {
    document.getElementById(Id).style.display = "none";
}
function show(Id) {
    document.getElementById(Id).style.display = "block";
}
function generateQA() {
    var x = Math.floor((Math.random() * 10) + 1);
    var y = Math.floor((Math.random() * 10) + 1);
    trueAnswer = x * y;
    trueAnswerRandomBox = Math.floor((Math.random() * 4) + 1);
    document.getElementById("answer-box" + trueAnswerRandomBox).innerHTML = trueAnswer;
    var randomBox = Math.floor((Math.random() * 100) + 1);
    var answers = [trueAnswer];
    for (var i = 1; i < 5; i++) {
        if (i !== trueAnswerRandomBox) {
            //    var wrongAnswerRandom = (Math.floor((Math.random() * 10) + 1)) * (Math.floor((Math.random() * 10) + 1)); 
            do {
                wrongAnswerRandom = (Math.floor((Math.random() * 10) + 1)) * (Math.floor((Math.random() * 10) + 1));
            }
            while (answers.indexOf(wrongAnswerRandom) > -1)
            document.getElementById("answer-box" + i).innerHTML = wrongAnswerRandom;
            answers.push(wrongAnswerRandom);
        }
    }
    document.getElementById("question").innerHTML = x + "x" + y;
    for (var i = 1; i < 5; i++) {
        document.getElementById("answer-box" + i).onclick = function () {
            wrongAnswer();
        }
        document.getElementById("answer-box" + trueAnswerRandomBox).onclick = function () {
            correctAnswer();
            score++;
            document.getElementById("scorevalue").innerHTML = score;
        }
    }
    function correctAnswer() {
        show("correctAnswer");
        setInterval(function () {
            hide("correctAnswer");
        }, 1000);
        generateQA();
    }
    function wrongAnswer() {
        show("wrongAnswer");
        setInterval(function () {
            hide("wrongAnswer");
        }, 1000);
    }
}


   
            