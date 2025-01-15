const form = document.querySelector('[data-js="form"]');
const cardContainer = document.querySelector('[data-js=')
const questionInput = document.querySelector('[data-js="question-input"]');
const answerInput = document.querySelector('[data-js="answer-input"]');


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formElement = event.target;
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    const card = document.createElement("article");
    card.classList.add("card");

    const questionElement = document.createElement("h2");
    questionElement.textContent = data.questionInput
})