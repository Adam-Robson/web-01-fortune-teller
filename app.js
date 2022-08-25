
const questionSection = document.getElementById('question-section');
const userQuestion = document.getElementById('user-question');
const questionButton = document.getElementById('question-button');
const showQuestion = document.getElementById('show-question');
const showAnswer = document.getElementById('show-answer');
const answerSection = document.getElementById('answer-section');
const resetButton = document.getElementById('reset-button');

const answers = [
    'you do you',
    'No doubt',
    'keep telling yourself that',
    'what is certainty anyway?',
    'Most think so, and most are wrong',
    'it is likely that perhaps it could happen',
    'tentative at best',
    'you know im lazy',
    'now is not a good time',
    'ask again but nicely',
];

// set event listeners
questionButton.addEventListener('click', () => {
    copyQuestion();
    toggleVisibility();
    applyAnimations();
    showRandomAnswer();
});

function copyQuestion() {
    const question = userQuestion.value;
    showQuestion.textContent = question;
}

function toggleVisibility() {
    questionSection.classList.add('hidden');
    answerSection.classList.remove('hidden');
}

function getRandomAnswer(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item; 
}

function applyAnimations() {
    showAnswer.classList.add('initial-view');
}

function showRandomAnswer() {
    const randomAnswer = getRandomAnswer(answers);
    showAnswer.textContent = randomAnswer;
}

resetButton.addEventListener('click', () => {
    showQuestion.textContent = '';
    showAnswer.textContent = '';
    showAnswer.classList.remove('initial-view');
    showAnswer.textContent = '';
    questionSection.classList.remove('hidden');
    answerSection.classList.add('hidden');
});

