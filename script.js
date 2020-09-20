const startButton = $(".startbuttonclass");
const questionTitle1 = $(".question_title1");
const questionTitle2 = $(".question_title2");
const questionTitle3 = $(".question_title3");
const questionTitle4 = $(".question_title4");
const answerTitle1 = $(".answer_title1");
const answerTitle2 = $(".answer_title2");
const answerTitle3 = $(".answer_title3");
const answerTitle4 = $(".answer_title4");
const submitForm = $('.myFormS');

var yourName = $(".yourName")
var scoreEl = document.querySelector(".score");
var highScore = 0;
var timeEl = document.querySelector(".time");
var secondsLeft = 40;
var name = prompt("What is your name?");

questionTitle1.hide();
questionTitle2.hide();
questionTitle3.hide();
questionTitle4.hide();
answerTitle1.hide();
answerTitle2.hide();
answerTitle3.hide();
answerTitle4.hide();
submitForm.hide();

// start timer on Start Button click
startButton.click(function () {
    setTime();
    function setTime() {
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timeEl.textContent = "Timer:  " + secondsLeft;
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                questionTitle1.hide();
                questionTitle2.hide();
                questionTitle3.hide();
                questionTitle4.hide();
                answerTitle1.hide();
                answerTitle2.hide();
                answerTitle3.hide();
                answerTitle4.hide();
            }
        }, 1000);
    }
});

// start Button hover and slide function
startButton.hover(function () {
    $(this).toggleClass("startbuttonclass2");
    $(this).click(function () {
        $(this).toggleClass("startbuttonclass3");
        questionTitle1.slideDown();
        answerTitle1.slideDown();
        startButton.slideUp(700);
        scoreEl.textContent = "You got: " + highScore;
    });
});

// onclick function first question/second questions
$(".answer").on("click", function () {
    if ($(this).val() == 3) {
        $(this).css('background-color', 'green');
        $(this).css('color', 'white');
    } else {
        $(this).css('background-color', 'red');
        $(this).css('color', 'white');
    }
    questionTitle1.slideUp(1000);
    answerTitle1.slideUp(1000);
    questionTitle1.fadeOut(1000);
    answerTitle1.fadeOut(1000);
    questionTitle2.slideDown(1000);
    answerTitle2.slideDown(1000);
    questionTitle2.fadeIn(1000);
    answerTitle2.fadeIn(1000);

    if ($(this).val() == 3) {
        secondsLeft += 5;
        timeEl.textContent = "Timer:  " + secondsLeft;
        highScore += 1;
        scoreEl.textContent = "You Rock! You got: " + highScore;

    } else {
        secondsLeft -= 5;
        timeEl.textContent = "Timer:  " + secondsLeft;
        highScore -= 1;
        scoreEl.textContent = "You got: " + highScore;
    }
});

// onclick function second question/third question
$(".answer2").on("click", function () {
    if ($(this).val() == 3) {
        $(this).css('background-color', 'green');
        $(this).css('color', 'white');
    } else {
        $(this).css('background-color', 'red');
        $(this).css('color', 'white');
    }
    questionTitle2.slideUp(1000);
    answerTitle2.slideUp(1000);
    questionTitle2.fadeOut(1000);
    answerTitle2.fadeOut(1000);
    questionTitle3.slideDown(1000);
    answerTitle3.slideDown(1000);
    questionTitle3.fadeIn(1000);
    answerTitle3.fadeIn(1000);

    if ($(this).val() == 3) {
        secondsLeft += 5;
        timeEl.textContent = "Timer:  " + secondsLeft;
        highScore += 1;
        scoreEl.textContent = "Keep it Up! You got: " + highScore;
    } else {
        secondsLeft -= 5;
        timeEl.textContent = "Timer:  " + secondsLeft;
        highScore -= 1;
        scoreEl.textContent = "You got: " + highScore;
    }
});

// onclick function third question/forth question
$(".answer3").on("click", function () {
    if ($(this).val() == 3) {
        $(this).css('background-color', 'green');
        $(this).css('color', 'white');
    } else {
        $(this).css('background-color', 'red');
        $(this).css('color', 'white');
    }
    questionTitle3.slideUp(1000);
    answerTitle3.slideUp(1000);
    questionTitle3.fadeOut(1000);
    answerTitle3.fadeOut(1000);
    questionTitle4.slideDown(1000);
    answerTitle4.slideDown(1000);
    questionTitle4.fadeIn(1000);
    answerTitle4.fadeIn(1000);

    if ($(this).val() == 3) {
        secondsLeft += 5;
        timeEl.textContent = "Timer:  " + secondsLeft;
        highScore += 1;
        scoreEl.textContent = "Keep it Up! You got: " + highScore;
    } else {
        secondsLeft -= 5;
        timeEl.textContent = "Timer:  " + secondsLeft;
        highScore -= 1;
        scoreEl.textContent = "You got: " + highScore;
    }
});

// onclick function third question/forth question
$(".answer4").on("click", function () {
    if ($(this).val() == 3) {
        $(this).css('background-color', 'green');
        $(this).css('color', 'white');
        secondsLeft += 5;
        timeEl.textContent = "Timer:  " + secondsLeft;
        highScore += 1;
        scoreEl.textContent = "You are on FIRE today! Your High Score: " + highScore + " !";

    } else {
        $(this).css('background-color', 'red');
        $(this).css('color', 'white');
        secondsLeft -= 5;
        timeEl.textContent = "Timer:  " + secondsLeft;
        highScore -= 1;
        scoreEl.textContent = "Your High Score: " + highScore + " !";
    }
    questionTitle3.slideUp(1000);
    answerTitle3.slideUp(1000);
    questionTitle3.fadeOut(1000);
    answerTitle3.fadeOut(1000);
    questionTitle4.slideUp(1000);
    answerTitle4.slideUp(1000);
    questionTitle4.fadeOut(1000);
    answerTitle4.fadeOut(1000);
    $(timeEl).slideUp(1000);
    submitForm.show();
    

});

$("#goBack").click(function () {
    location.reload();

});