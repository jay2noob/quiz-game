const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const quizElement = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const answerBtnsElement = document.getElementById("answer-btns");
var secondsDisplay = document.getElementById("timer");

let randQuestions, questionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    questionIndex++;
    nextQuestion();
});

function startGame() {
    startButton.classList.add("hide");
    randQuestions = questions.sort(() => Math.floor(Math.random()) * questions.length);
    questionIndex = 0;
    quizElement.classList.remove("hide");
    nextQuestion();
    startTimer();
}

var totalSeconds = 75;
var interval;

function startTimer() {
    var interval = setInterval(function() {
        totalSeconds--;
        secondsDisplay.textContent = totalSeconds;
        if (totalSeconds === 0) {
            clearInterval(interval);
        }
    }, 1000);
}

function nextQuestion() {
    resetState();
    newQuestion(randQuestions[questionIndex]);
}

function resetState() {
    newQuestion();
}

function newQuestion() {
    questionElement.innerText = question.title;
    
}

