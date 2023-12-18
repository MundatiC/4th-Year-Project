const questions = [
    { sentence: "She __ to school.", options: ["goes", "went", "will go"], correct: "goes" },
    // Add more questions here
];

let currentQuestion = 0;

function displayQuestion() {
    const questionDiv = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    questionDiv.textContent = questions[currentQuestion].sentence;
    optionsContainer.innerHTML = '';

    questions[currentQuestion].options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('option');
        optionButton.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(optionButton);
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].correct) {
        alert("Correct!");
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            alert("Congratulations! You've completed the game.");
        }
    } else {
        alert("Try again!");
    }
}

displayQuestion();
