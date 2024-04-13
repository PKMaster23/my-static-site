const questions = [
    { 
        question: "What is the capital of France?", 
        options: ["Paris", "London", "Berlin", "Madrid"], 
        answer: "Paris" 
    },
    { 
        question: "What is 2 + 2?", 
        options: ["3", "4", "5", "6"], 
        answer: "4" 
    }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = function() { selectOption(option); };
        optionsContainer.appendChild(button);
    });
}

function selectOption(option) {
    const question = questions[currentQuestionIndex];
    if (option === question.answer) {
        alert("Correct!");
    } else {
        alert("Incorrect, try again!");
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert("Quiz completed!");
        currentQuestionIndex = 0;
        displayQuestion();
    }
}

window.onload = displayQuestion;
