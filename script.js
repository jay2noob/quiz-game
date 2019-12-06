const startButton = document.getElementById("start-btn");
const quizElement = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const answerBtnsElement = document.getElementById("answer-btns");
var secondsDisplay = document.getElementById("timer");

let randQuestions, questionIndex;

startButton.addEventListener("click", startGame);

function startGame() {
    startButton.classList.add("hide");
    randQuestions = questions.sort(() => Math.floor(Math.random()) * questions.length);
    questionIndex = 0;
    quizElement.classList.remove("hide");
    newQuestion();
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
     resetQuestion();
     newQuestion(randQuestions[questionIndex]);
 }

 function resetQuestion() {
     newQuestion();
 }

function newQuestion() {
    for (var i = 0; i < questions.length; i++) {
        questionElement.textContent = questions[questionIndex].title;
        let bArr = answerBtnsElement.children
        for (var j = 0; j < bArr.length; j++){
            bArr[j].textContent = questions[questionIndex].choices[j]
        }
    }
    
}

/*
answerBtnsElement.addEventListener("click", function() {
    if ()
})

on click, check textcontent of clicked element against questions array at current questionIndex answer to see if correct

if true... do thing

if false... do thing

no matter if true or false, 
    update question text in html
    and
    update answer buttons

increment questionIndex


*/

//document.querySelector(".ans1").textContent = questions[0].choices[0]
//console.log(questions);