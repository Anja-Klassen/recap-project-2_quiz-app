const form = document.querySelector('[data-js="form"]');
const cardContainer = document.querySelector("[data-js=card-container]");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formElement = event.target;
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData);
    
    // neue Karten Liste erstellen
    const cardElement = document.createElement("li");
    cardElement.classList.add("card-list__item");
    cardContainer.append(cardElement);
 
    // neue Karte erstellen
    const newCard = document.createElement("article");
    newCard.classList.add("card");
    cardElement.append(newCard);

    // Frage hinzufügen
    const questionElement = document.createElement("h2");
    questionElement.textContent = data.question;
    questionElement.classList.add("card__question");
    newCard.append(questionElement);

    // Antwort hinzufügen
    const answerElement = document.createElement("p");
    answerElement.textContent = data.answer;
    answerElement.classList.add("card__answer--active");
    newCard.append(answerElement);

    //Tag Container hinzufügen
    const tagList = document.createElement("ul");
    tagList.classList.add("card__tag-list");
    newCard.append(tagList);

    const tagElement = document.createElement("li");
    tagElement.textContent = data.tag;
    tagElement.classList.add("card__tag-list-item");
    tagList.append(tagElement);
})