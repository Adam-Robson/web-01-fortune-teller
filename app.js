// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state
  // update DOM to reflect the new state
  


const questionSection = document.getElementById('section');
const userQuestion = document.getElementById('user-question');
const questionButton = document.getElementById('question-button');
const answerSection = document.getElementById('answer-section');
const showQuestion = document.getElementById('show-question');
const showAnswer = document.getElementById('show-answer');
const binoculars = document.getElementById('binoculars');

const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Do not count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
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
    showAnswer.classList.add('binoculars');
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
