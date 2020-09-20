$(".answer").on("click", function () {
    if ($(this).value == 1) {
        //incorrect answer
        question_title2.slideDown();
        answerTitle1.slideUp();
        answer_title1.slideUp();
        secondsLeft -= 5;
    }
    if ($(this).value == 2) {
        //incorrect answer
    }
    if ($(this).value == 3) {
        //correct answer
    }
    if ($(this).value == 4) {
        //incorrect answer
    }
});
