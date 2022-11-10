const startBtn = document.querySelector('#start-btn');
const timerDiv = document.querySelector('#timer');
const questionsDiv = document.querySelector('#questions');


const questions = [
        {
        text: "The alert method is applied by which DOM element by default?",
        choices: ["1. Header", "2. Window", "3. Body", "4. Footer"],
        answer: "2. Window"
    },
    {
        text: "Which language is primarily used to added interactivity to a webpage?",
        choices: ["1. HTML", "2. CSS", "3. Ruby on Rails", "4. JavaScript"],
        answer: "4. JavaScript"
    },
    {
        text: "question 3",
        choices: ["1. A", "2. B", "3. C", "4. D"],
        answer: "2. B"
    },
    {
        text: "question 4",
        choices: ["1. A", "2. B", "3. C", "4. D"],
        answer: "2. B"
    },
];

let questionIndex = 0;
let time = 60;
let quizTimer;

const startQuiz = () => {
    quizTimer
}

startBtn.addEventListener("click", function(event) {
    
});



// -------------------------------------------------------------------------------