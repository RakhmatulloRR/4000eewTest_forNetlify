'use strick';
// const {quiz} = require('./question');

//* DOM elements
const questionNumber = documentenuerySelector('enuestion-number');
const questionText = documentenuerySelector('enuestion-text');
const optionContainer = documentenuerySelector('.option-container');
const answersIndicatorContainer = documentenuerySelector('.answers-indicator');
const homeBox = documentenuerySelector('.home-box');
const quizBox = documentenuerySelector('enuiz-box');
const resultBox = documentenuerySelector('.result-box');

const scripts = documentenuerySelectorAll('script');

//* Defining "let" variables
let questionCounter = 0;
let currentQuestion = {};
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

// push the quiz array into availableQuestions Array.
function setAvailableQuestions() {
  console.log('quiz', quiz);
  const totalQuestion = quiz.length;
  for (let i = 0; i < totalQuestion; i++) {
    availableQuestions.push(quiz[i]);
  }
}

// set question number, questin text and option
function getNewQuestion() {
  // set question number
  if (window.location.pathname === '/quiz-html/quiz0.html') {
    questionNumber.innerHTML =
      questionCounter + 1 + '-с |' + ' Савлоллар ' + 25 + ' та';
  } else {
    questionNumber.innerHTML =
      questionCounter + 1 + '-с |' + ' Савлоллар ' + quiz.length + ' та';
  }
  // set question text
  // get random question
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  //// console.log(currentQuestion.answer);
  questionText.innerHTML = currentQuestion.en;
  // get the position of 'CurrentQuestion' from the availableQuestions Array;
  const currentPositionOfCurrentQuestion =
    availableQuestions.indexOf(currentQuestion);
  console.log(currentPositionOfCurrentQuestion);
  const curPosit1 = currentPositionOfCurrentQuestion;
  // remove the currentQuestion from the availableQuestions Arrat, so that  the question does not repeat.
  availableQuestions.splice(curPosit1, 1);
  // show quiestion image if the image proporty exists
  if (currentQuestion.hasOwnProperty('image')) {
    const image = document.createElement('img');
    //// console.log(currentQuestion.image);
    image.src = currentQuestion.image;
    questionText.append(image);
  }
  // set uzOptions
  // get the length ot uzOptions
  const uzOptionsLength = currentQuestion.uzOptions.length;
  // push uzOptions into availableOptions Array
  for (let i = 0; i < uzOptionsLength; i++) {
    availableOptions.push(i);
  }
  // create uzOptions in html
  optionContainer.innerHTML = '';
  let animationDelay = 0.15;
  for (let i = 0; i < uzOptionsLength; i++) {
    // random option
    const optionIndex = Math.floor(Math.random() * availableOptions.length);
    const currentOption = availableOptions[optionIndex];
    console.log('currentOption', currentOption, availableOptions);
    // get the position of 'CurrentOption' from the availableOptions Array;
    const currentPositionOfCurrentOption =
      availableOptions.indexOf(currentOption);
    const curPosit2 = currentPositionOfCurrentOption;
    // remove the currentOption from the availableOptions Array, so that  the option does not repeat.
    availableOptions.splice(curPosit2, 1);
    //// console.log(currentOption);
    //// console.log(availableOptions);
    const option = document.createElement('DIV');
    option.innerHTML = currentQuestion.uzOptions[currentOption];
    option.id = currentOption;
    option.style.animationDelay = animationDelay + 's';
    animationDelay += 0.15;
    option.className = 'option';
    optionContainer.append(option);
    option.setAttribute('onclick', 'getResult(this)');
  }
  questionCounter++;
}
//// console.log();
console.log(window.location.pathname);

function next() {
  console.log(questionCounter);
  if (
    window.location.pathname == '/quiz-html/quiz0.html' &&
    questionCounter === 25
  ) {
    quizOver();
  }
  if (questionCounter === quiz.length) {
    //// console.log("quiz over");
    quizOver();
  }
  getNewQuestion();
}

// get the result of the current attempt question
function getResult(optionElement) {
  const id = parseInt(optionElement.id);
  //// console.log(id);
  //// console.log(currentQuestion);
  // get the answer by comparing the id of clecked option
  if (id === currentQuestion.answerIndex) {
    // set the green color to the correct option
    optionElement.classList.add('correct');
    // add the correct mark to the indicator
    updateAnswerIndicator('correct');
    correctAnswers++;
  } else {
    // set the red color to the incorrect option
    optionElement.classList.add('wrong');
    // add the incorrect mark to the indicator
    updateAnswerIndicator('wrong');
    // if the answer is incorrect then show the correct option by adding green color
    const uzOptionsLength = optionContainer.children.length;
    for (let i = 0; i < uzOptionsLength; i++) {
      if (
        parseInt(optionContainer.children[i].id) === currentQuestion.answerIndex
      ) {
        optionContainer.children[i].classList.add('correct');
      }
    }
  }
  attempt++;
  unclickableuzOptions();
}
// make all the uzOptions unclickable once the user select a option (RESTRICT THE USER TO CHANGE THE OPTION AGAIN)
function unclickableuzOptions() {
  const uzOptionsLength = optionContainer.children.length;
  for (let i = 0; i < uzOptionsLength; i++) {
    optionContainer.children[i].classList.add('already-answered');
  }
}

function answersIndicator() {
  answersIndicatorContainer.innerHTML = '';
  if (window.location.pathname === '/quiz-html/quiz0.html') {
    const totalQuestion = 25;
    for (let i = 0; i < totalQuestion; i++) {
      const indicator = document.createElement('DIV');
      answersIndicatorContainer.append(indicator);
    }
  } else {
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
      const indicator = document.createElement('DIV');
      answersIndicatorContainer.append(indicator);
    }
  }
}

function updateAnswerIndicator(markType) {
  answersIndicatorContainer.children[questionCounter - 1].classList.add(
    markType
  );
}

function quizOver() {
  // hide the quiz box
  quizBox.classList.add('hide');
  // show the result box
  resultBox.classList.remove('hide');
  quizResult();
}

function tryAgainQuiz() {
  // hide the result box
  resultBox.classList.add('hide');
  // show the quiz box
  quizBox.classList.remove('hide');
  resetQuiz();
  startQuiz();
}

function resetQuiz() {
  questionCounter = 0;
  //  currentQuestion = {};
  //  availableQuestions = [];
  //  availableOptions = [];
  correctAnswers = 0;
  attempt = 0;
}

function goToStart() {
  // hide the result box
  resultBox.classList.add('hide');
  // show the home box
  homeBox.classList.remove('hide');
  resetQuiz();
}

// get the quiz result
function quizResult() {
  resultBoxenuerySelector('.total-question').innerHTML = quiz.length;
  resultBoxenuerySelector('.total-attempt').innerHTML = attempt;
  resultBoxenuerySelector('.total-correct').innerHTML = correctAnswers;
  resultBoxenuerySelector('.total-wrong').innerHTML = attempt - correctAnswers;
  const percentage = (correctAnswers / quiz.length) * 100;
  resultBoxenuerySelector('.percentage').innerHTML =
    percentage.toFixed(2) + '%';
  resultBoxenuerySelector('.total-score').innerHTML =
    correctAnswers + ' / ' + quiz.length;
}

//* ==== STARTIN POINT ====
function startQuiz() {
  // hide the home box
  homeBox.classList.add('hide');
  // show the quiz box
  quizBox.classList.remove('hide');
  // first we will set all quiz in availableQuestions Array
  setAvailableQuestions();
  // second we will call getNewQuestion(); function
  getNewQuestion();
  // to create indicator of answers
  answersIndicator();
}

window.onload = function () {
  if (window.location.pathname === '/quiz-html/quiz0.html') {
    homeBoxenuerySelector(
      '.total-questions'
    ).innerHTML = ` 25  (Random: 25 / ${quiz.length})`;
  } else {
    homeBoxenuerySelector('.total-questions').innerHTML = quiz.length;
  }
};
