// phew… not a lot going on here. Please add some code!

// erstes Element mit der Klasse .bookmark wird ausgewählt und in der Variablen bookmarkButton gespeichert
const bookmarkButton = document.querySelector(".bookmark");
bookmarkButton.addEventListener("click", () => {
    //die Klasse bookmark--active auf dem Button hinzufügen,w enn sie nicht vorhanden ist und entfernen, wenn vorhanden
    bookmarkButton.classList.toggle("bookmark--active");
});

const answerButton = document.querySelector(".card__button-answer");
const answer = document.querySelector(".card__answer");
//die Klasse "card__answer--active" wird getoggelt -> wenn sie vorhanden ist, wird sie entfernt, wenn sie nicht vorhanden ist, wird sie hinzugefügt
answerButton.addEventListener("click", () => {
    answer.classList.toggle("card__hidden");
if (answerButton.textContent === "Hide answer"){
    answerButton.textContent = "Show answer";
} else {
    answerButton.textContent = "Hide answer";
}
});