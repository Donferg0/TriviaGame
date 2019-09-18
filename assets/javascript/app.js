//Create questions object for trivia

var questions = [{
    question: "Who was the last team to 3 peat?",
    answers: ["Golden State Warriors", "Los Angeles Lakers", "Chicago Bulls", "Detroit Pistons"],
    Answer: "Los Angeles Lakers"
}, {
    question: "Which team was formally known as the Rochester Royals?",
    answers: ["Sacrmento Kings", "Phoenix Suns", "Houston Rockets", "Washington Wizards"],
    Answer: "Sacremento Kings"
}, {
    question: "Which of these now defunct teams played more than 1 season in the NBA?",
    answers: ["Providence Steamrollers", "Pittsburgh Ironmen", "Sheboygan Red Skins", "Cleveland Rebels"],
    Answer: "Providence Steamrollers"

}, {
    question: "Which of these NBA iconic figures has a middle name of Ezail?",
    answers: ["Dr. J", "Magic", "The Answer", "Air Canada"],
    Answer: "The Answer"

}, {
    question: "Which player in this list has the most NBA Championships?",
    answers: ["Kobe Bryant", "Robert Horry", "Sam Jones", "Bob Cousy"],
    Answer: "Sam Jones"

}, {
    question: "Who is known as the only player to have played with both Bill Russel and Larry Bird?",
    answers: ["Red Auerbach", "Bob Pettit", "James Worthy", "Donald Chaney"],
    Answer: "Donald Chaney"

}, {
    question: "Who is the only coach to be named Coach of the Year for three different franchises?",
    answers: ["Don Nelson", "Pat Riley", "Dwayne Casey", "Gene Shue"],
    Answer: "Pat Riley"

}, {
    question: "Name the only woman to head the NBAPA!",
    answers: ["Jemele Hill", "Condoleezza Rice", "Michele Roberts", "Jennifer Welter"],
    Answer: "Michele Roberts"
}

]




//when start is clicked, remove the start button and replace with questions/ set timer
$('#start').on('click', function () {
    game.start();
})

$(document).on('click', '#end', function(){
    game.done();
})

//create way to calculate correct and incorrect answers

var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter <= 0) {
            console.log("Time is up!")
            game.done();
        }
    },

    start: function() {
        timer = setInterval(game.countdown, 1000);
        $('#lilwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#lilwrapper').append('<h3>' + questions[i].question + '</h3>');
            for (a = 0; a < questions[i].answers.length; a++) {
                $('#lilwrapper').append("<input type='radio' name='question" + i + "'value='" + questions[i].answers[a] + "'>" + questions[i].answers[a])        
            }
        }
        $('#lilwrapper').append("<br><button id='end'> END!</button>");
    },

    done: function() {
        $.each($("input[name='question-0']:checked"), function () {
            if($(this).val() == questions[0].Answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if($(this).val() == questions[1].Answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if($(this).val() == questions[2].Answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if($(this).val() == questions[3].Answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if($(this).val() == questions[4].Answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if($(this).val() == questions[5].Answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function () {
            if($(this).val() == questions[6].Answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function () {
            if($(this).val() == questions[7].Answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },

    result: function(){
        clearInterval(timer);
        $('#lilwrapper h2').remove();

        $('#lilwrapper').html("<h2>Lets see if you're really a NBA fan!!</h2>");
        $('#lilwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
        $('#lilwrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $('#lilwrapper').append("<h3>Unanswered: " + (questions.length-(this.correct+this.incorrect)) + "</h3>")
    }

}

//force the automute function present on Chrome to enable audio
function unmute() {
    var vid = document.getElementById("myVideo");
    var aud = document.getElementById("myAudio");

    aud.currentTime = vid.currentTime;
    aud.play();

}
