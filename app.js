
const questionSection = document.getElementById('section');
const userQuestion = document.getElementById('user-question');
const questionButton = document.getElementById('question-button');
const answerSection = document.getElementById('answer-section');
const showQuestion = document.getElementById('show-question');
const showAnswer = document.getElementById('show-answer');
const binoculars = document.getElementById('binoculars');

const answers = [
    'you do you',
    'certainly',
    'No doubt',
    'keep telling yourself that',
    'yep',
    'Most Like to think so',
    'perhaps',
    'tentatively',
    'i don\'t know im lazy',
    'now is not a good time',
    'ask again in a nice way',
    'Do not think so',
    'No means no',
    'probably not',
    'nah',
    'doubtful',
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

function applyAnimations() {
    showAnswer.classList.add('initial-view');
    showAnswer.add(binoculars);
}

function showRandomAnswer() {
    const randomAnswer = getRandomAnswer(answers);
    showAnswer.textContent = randomAnswer;
}

function getRandomAnswer(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item;
}
