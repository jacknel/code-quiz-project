var quizContent = document.querySelector('.quiz-content');
var timer = document.querySelectorAll('.time-left');
var qTitleElement = document.querySelector('#question-title');
var startQuizElement = document.querySelector('#start-quiz');
var startBtn = document.querySelector('#start-button');
var answerChoices = document.querySelector('#answer-choices');
var questionIndex = 0;


var questions = [
    {
    questionTitle: "The alert method is applied by which DOM element by default?",
    choices: ["1. Header", "2. Window", "3. Body", "4. Footer"],
    answer: "2. Window"
},
{
    questionTitle: "Which language is primarily used to added interactivity to a webpage?",
    choices: ["1. HTML", "2. CSS", "3. Ruby on Rails", "4. JavaScript"],
    answer: "4. JavaScript"
}
];

function validateAnswer(){
    console.log(this.value);
    if (this.value === questions[questionIndex].answer){
        questionIndex++;
        console.log('here')
        startQuiz();
    } 
};

function startQuiz(){
    qTitleElement.textContent = questions[questionIndex].questionTitle;
    answerChoices.textContent = '';
    questions[questionIndex].choices.forEach(choice => {
        var button = document.createElement('button');
        button.textContent = choice;
        button.setAttribute('value', choice);
        button.onclick = validateAnswer;
        answerChoices.appendChild(button);

    });
};

startBtn.addEventListener('click', function(){
    console.log('here');
    startQuizElement.setAttribute('class', 'hide');
    quizContent.classList.remove('hide');

    startQuiz();
})
