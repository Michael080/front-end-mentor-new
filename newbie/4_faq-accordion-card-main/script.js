const questions = document.querySelectorAll('.container-question');
let result;

function expandAnswer(questionElem) {
  const answerDOM = event.target.parentElement.nextSibling.nextElementSibling;

  // Increase question font-weight
  event.target.classList.toggle('active');
  answerDOM.classList.toggle('hidden'); // display answer text
  
}

questions.forEach(question => {
  question.addEventListener('click', expandAnswer);
})