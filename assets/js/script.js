const startBtn = document.querySelector('#start-btn');
const timerDiv = document.querySelector('#timer');
const timeSpan = document.querySelector('#time');
const questionsDiv = document.querySelector('#questions');
const highScores = document.querySelector('.highscores');
const titleText = document.querySelector('#titleText');
const header = document.querySelector('header');

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
    {
        text: "",
        choices: [],
        answer: ""
    },
];

let questionIndex = 0;
let time = 60;
let quizTimer;

const refreshPage = () => {
    window.location.reload()
}

const showScores = () => {
    
    header.remove();
    document.querySelector('main').remove();

    const hsDiv = document.createElement("div");
    const hsHeader = document.createElement("header");
    const hsTitle = document.createElement("h1");
    const hsGoBack = document.createElement("button");

    hsGoBack.textContent = "go back";
    hsGoBack.setAttribute("id", "goBack");
    hsDiv.setAttribute("id", "hsDiv");

    hsHeader.innerHTML = "Current High Score";
    hsHeader.setAttribute('id', 'hsHeader');    
    hsTitle.textContent = localStorage.getItem('newHs') + ": " + localStorage.getItem('newScore');

    document.querySelector('body').appendChild(hsHeader);
    document.querySelector('body').appendChild(hsDiv);
    hsDiv.appendChild(hsTitle);
    hsDiv.appendChild(hsGoBack);
    hsGoBack.addEventListener("click", refreshPage)
    
};

const startQuiz = () => {

    quizTimer = setInterval(function() {
        time--;
        timeSpan.textContent = time;
        if (time === 0) {
            endQuiz();
        }
    }, 1000);
   
    displayQuestions();

};

const displayQuestions = () => {
    questionsDiv.innerHTML = ''
    const questionText = questions[questionIndex].text;
    const questionAnswer = questions[questionIndex].answer;
    const questiionTextDiv = document.createElement('div');
    questiionTextDiv.innerText = questionText;
    questionsDiv.append(questiionTextDiv);

    const questionChoices = questions[questionIndex].choices;
    questionChoices.forEach(choice => {
        const questionBtn = document.createElement('button');
        questionBtn.textContent = choice;
        questionsDiv.append(questionBtn);

        questionBtn.addEventListener('click', function(event){
            if (event.target.textContent === questionAnswer) {
                handleCorrectAnswer();
            } else {
                handleIncorrectAnswer();
            };
        })
    });
};

const handleCorrectAnswer = () => {
    questionIndex++;
    displayQuestions();
    console.log('correct stuff');
    if (questionIndex === 4) {
        endQuiz();
    };
};
 
const handleIncorrectAnswer = () => {
    questionIndex++;
    displayQuestions();
    time -= 5;
    console.log('incorrect stuff');
    if (questionIndex === 4) {
        endQuiz();
    };
};


const endQuiz = () => {

    clearInterval(quizTimer);
    questionsDiv.remove();
    titleText.innerHTML = "Log your score here!";

    let endContainer = document.createElement("div");
    document.querySelector("main").appendChild(endContainer);

    let hsMessage = document.createElement("p");
    hsMessage.innerHTML = "Final Score" + ' ' + time + '/60';

    let inputBox = document.createElement("input");
    inputBox.setAttribute("type", "text");
    inputBox.setAttribute("placeholder", "Enter your intitals here");

    let submitButton = document.createElement("button");
    submitButton.textContent = ('submit');

    endContainer.appendChild(hsMessage);
    endContainer.appendChild(inputBox);
    endContainer.appendChild(submitButton);

    
    const goBack = document.createElement("button");
    goBack.textContent = "go back";
    endContainer.appendChild(goBack);
    goBack.addEventListener("click", refreshPage)

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        let newEntry = inputBox.value;
        let studentScore = time;
        if (newEntry === "") {
            alert("Can't submit an empty form!");
        } else {
            alert("Your highscore has been logged!")}
        console.log(newEntry);
        localStorage.setItem('newHs', newEntry)
        localStorage.setItem('newScore', studentScore)
        inputBox.value = ""
        });
    return;
};

highScores.addEventListener("click", showScores);
startBtn.addEventListener('click', startQuiz);