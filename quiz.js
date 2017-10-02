'use strict';

const quizQuestions = [ 
  {question: 'How many planets are there in our solar system?',
    correct: 0,
    answers: ['eight', 'nine', 'thirteen', 'six']},
  {question: 'Of the four inner planets, which is biggest?',
    correct: 3,
    answers: ['Mars', 'Saturn', 'Venus', 'Earth']},
  {question: 'Which planet in our solar system has rings?',
    corect: 3,
    answers: ['Jupiter', 'Saturn', 'Uranus', 'all of the above']},
  {question: 'What was the first planet to be discovered with a telescope?',
    correct: 0,
    answers: ['Uranus', 'Saturn', 'Mercury', 'Neptune']},
  {question: 'How many exoplanets (planets orbiting stars other than our Sun) have we discovered?',
    correct: 0,
    answers: ['3600', '4200', '58', 'none']},
  {question: 'Which planet was discovered through mathematical calculations rather than with a telescope?',
    correct: 2,
    answers: ['Europa', 'Pluto', 'Neptune', 'Mercury']},
  {question: 'Which of the four Galilean moons is most likely to harbor life in its subsurface oceans?',
    correct: 1,
    answers: ['Io', 'Europa', 'Ganimede', 'Callisto']},
  {question: 'Which of the four Galilean moons is the biggest?',
    correct: 2,
    answers: ['Io', 'Europa', 'Ganimede', 'Callisto']},
  {question: 'On which planet is the solar system\'s largest volcano, Olympus Mons, located?',
    correct: 0,
    answers: ['Mars', 'Venus', 'Jupiter', 'Earth']},
  {question: 'Jupiter\'s Great Red Spot is a gigantic hurricane bigger than Earth. How long has it been raging?',
    correct: 3,
    answers: ['3 months', '18 months', 'a year', '350 years']},
];

const STORE = {
  view: 'intro',
  questions: [{}, {}, {}, {}, {}],
  currentQuestion: null,
  correctResponses: null,
};

function shuffle(arr) {
  for (let i = arr.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
  }

  return arr;
}

function selectRandomQuestions() {
  let randomQuestions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  shuffle(randomQuestions);

  return randomQuestions.splice(0, 5);
}

function render() {
  if (STORE.view === 'intro') {
    console.log('Intro');
    
    renderIntro();
  }

  // else if (STORE.view === 'questions') {
  //   console.log('questions');
  //   renderQuestions();
  // }

  else if (STORE.view === 'results') {
    console.log('results');
    renderResults();
  }
}

function renderIntro() {
  $('.js-container').html(`<h1>Space Quiz!</h1>
  <p class="intro">Hey, there! Ready to see how much you know about our solar system and beyond? Go ahead and 
    click the button to get started. You'll have to answer five multiple choice questions, 
    without skipping the tough ones. When you're finished, click the button to move on and see if 
    you got it right. At the end, we'll tell you how well you did.<br><br>Have fun!</p>
  <button class="start-quiz" id="start-quiz">START</button>`);
  $('.js-container').on('click', '.start-quiz', function() {
    STORE.view = 'questions';
    renderQuestions();
  });
}

function renderQuestions() {
  $('.js-container').children().remove();
  
  let thisQuestions = selectRandomQuestions();

  renderNthQuestion(thisQuestions);
}

function renderNthQuestion(someArr) {
  console.log('Rendering Nth Question');

  STORE.currentQuestion = 1;

  for (let i = 0; i < someArr.length; i++) {
    STORE.questions[i] = quizQuestions[someArr[i]];
  }

  console.log(STORE.questions);

  for (let i = 0; i < STORE.questions.length; i++) {
    console.log(i);
    $('.js-container').html(`<form><label class='answer'>
    <p><span>${STORE.questions[i].question}</p>
    <input type="radio" name="choice" required>
    <span value="0">${STORE.questions[i].answers[0]}</span>
  </label>
  <br>

  <label class='answer'>
    <input type="radio" name="choice" required>
    <span value="1">${STORE.questions[i].answers[1]}</span>
  </label>
  <br>

  <label class='answer'>
    <input type="radio" name="choice" required>
    <span value="2">${STORE.questions[i].answers[2]}</span>
  </label>
  <br>

  <label class='answer'>
    <input type="radio" name="choice" required>
    <span value="3">${STORE.questions[i].answers[3]}</span>
  </label>
  <br>

  <button type="submit" id="submit" class="js-question-submit">Submit</button>`);}

  $('.js-container').on('click', '.js-question-submit', function() {});
    console.log($('form input[type=radio]:checked').val());
}

function renderQuestionsFeedback() {}

function renderResults() {}

function resetQuiz() {}

function main() { 
  render();

}

$(main);